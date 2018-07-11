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

//when you scroll, check if you need to load more posts
window.onscroll = function() {infiniteScroll()};

//keep track of how many posts have been loaded
var postCount = 0;

function onPageLoad(){
  var i;
  for (i=0;i<7;i++){
    //alert(i);
    firebase.database().ref('posts/' + i).once('value').then(function(snapshot) {
      document.getElementById("post-list").appendChild(returnNewPost(snapshot.val()));
    });
    //document.getElementById("post-list").appendChild(returnNewPost(loadPosts(i).val()));
  }
}

/*function loadPosts(var postNum) {
  var postsRef = firebase.database().ref('posts/' + postNum);
  //alert(postsRef);
  //var _this = this;
  //return firebase.database().ref('posts/' + postNum).once('value').then(function(snapshot) {
    //alert(snapshot.val());
    //return(snapshot.val());
  });

}*/

function returnNewPost(something){
  var listNode = document.createElement("LI");
  listNode.classList.add("post")
  var divNode = document.createElement("DIV");
  divNode.classList.add("col-10");
  divNode.classList.add("text");
  var textNode = document.createTextNode(something);
  divNode.appendChild(textNode);
  listNode.appendChild(divNode);
  var sideDiv = document.createElement("DIV");
  sideDiv.classList.add("col-2");
  sideDiv.classList.add("side");
  var testText = document.createTextNode("test");
  sideDiv.appendChild(testText);
  listNode.appendChild(sideDiv);
  return listNode;
}

function returnFakePost(){
  var listNode = document.createElement("LI");
  listNode.classList.add("post")
  var divNode = document.createElement("DIV");
  divNode.classList.add("col-10");
  divNode.classList.add("text");
  var textNode = document.createTextNode("This is a fake post. Nobody posts like that.");
  divNode.appendChild(textNode);
  listNode.appendChild(divNode);
  var sideDiv = document.createElement("DIV");
  sideDiv.classList.add("col-2");
  sideDiv.classList.add("side");
  var testText = document.createTextNode("test");
  sideDiv.appendChild(testText);
  listNode.appendChild(sideDiv);
  return listNode;
}


function infiniteScroll() {
  //alert("Pressed!");
  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight-(document.body.offsetHeight/5)) {
        // you're at the bottom of the page
    //alert("load more")
    var listNode = returnFakePost();
    document.getElementById("post-list").appendChild(listNode);
  }
}
