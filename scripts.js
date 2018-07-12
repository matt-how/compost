//Libraries
var config = {
  apiKey: "AIzaSyCNtYJ9o8ks7wILKZriVjjyf_pifsVxxxM",
  authDomain: "compost-78ddc.firebaseapp.com",
  databaseURL: "https://compost-78ddc.firebaseio.com",
  projectId: "compost-78ddc",
  storageBucket: "compost-78ddc.appspot.com",
  messagingSenderId: "401111104627"
};
firebase.initializeApp(config);

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

//when you scroll, check if you need to load more posts
window.onscroll = function() {infiniteScroll()};

//keep track of how many posts have been loaded
var postCount = 0;
var maxPosts;
var mode=0;
var topPostsLoaded=0;

function onPageLoad(newMode){
  var i;
  var ul = document.getElementById("post-list");
  while(ul.firstChild) ul.removeChild(ul.firstChild);
  if(newMode<0||newMode>1){
    newMode=0;
  }
  postCount=0;
  mode=newMode;
  firebase.database().ref('posts').once('value').then(function(snapshot){
    maxPosts = snapshot.numChildren();
    if(mode==0){
      for (i=0;i<4;i++){
        loadNewPost();
      }
    } else {
      loadNewPost();
    }

  });
}

function loadNewPost() {
  /*firebase.database().ref('posts/' + postCount).once('value').then(function(snapshot) {
    document.getElementById("post-list").appendChild(returnNewPost(snapshot.val()));
  });*/
  if(postCount<maxPosts){
    postCount++;
    if(mode==0){
      var ref = firebase.database().ref('posts').orderByKey().limitToLast(postCount);
    } else {
      var numToLoad =25;
      if (maxPosts<25){
        numToLoad = maxPosts;
      }
      var ref = firebase.database().ref('posts').orderByChild('score').limitToLast(numToLoad);
    }
    ref.once('value').then(function(snapshot){
      snapshot.forEach(function(childSnapshot){
        document.getElementById("post-list").appendChild(returnNewPost(childSnapshot.val().content,childSnapshot.val().score * -1));
          if (mode==0) return true;

      })
    });
  } else{
    //alert("Post count: " + postCount + " - Max Posts: " + maxPosts);
    //document.getElementById("post-list").appendChild(returnNewPost("This is a fake post. Nobody posts like that",0));
  }

}

function returnNewPost(mainText, score){
  var listNode = document.createElement("LI");
  listNode.classList.add("post")
  var divNode = document.createElement("DIV");
  divNode.classList.add("col-10");
  divNode.classList.add("text");
  var textNode = document.createTextNode(mainText);
  divNode.appendChild(textNode);
  listNode.appendChild(divNode);
  var sideDiv = document.createElement("DIV");
  sideDiv.classList.add("col-2");
  sideDiv.classList.add("side");
  var testText = document.createTextNode(score);
  sideDiv.appendChild(testText);
  listNode.appendChild(sideDiv);
  return listNode;
}


function infiniteScroll() {
  //alert("Pressed!");
  if (((window.innerHeight + window.scrollY) >= document.body.offsetHeight-(document.body.offsetHeight/5)) && mode==0) {
    // you're at the bottom of the page
  //  if (postCount >= maxPosts){
  //    var listNode = returnFakePost();
    //  document.getElementById("post-list").appendChild(listNode);
    //} else {
      loadNewPost();
    //}
  }
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

function submitPost(){
  var x = document.getElementById("newPostText").value;
  firebase.database().ref('posts').push({
    content: x,
    score: 0,
    comments: {}
  });
  document.getElementById("newPostText").value = "";
  onPageLoad(mode);
}
