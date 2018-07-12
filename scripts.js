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

function onPageLoad(){
  var i;

  firebase.database().ref('posts').once('value').then(function(snapshot){
    maxPosts = snapshot.numChildren();
  });
  //for (i=0;i<7;i++){
    loadNewPost();
  //}
}

function loadNewPost() {
  /*firebase.database().ref('posts/' + postCount).once('value').then(function(snapshot) {
    document.getElementById("post-list").appendChild(returnNewPost(snapshot.val()));
  });
  postCount++;*/
  var ref = firebase.database().ref('posts').orderByKey();
  ref.once('value').then(function(snapshot){
    snapshot.forEach(function(childSnapshot){
      document.getElementById("post-list").appendChild(returnNewPost(childSnapshot.val().content,childSnapshot.val().score));
      postCount++;
    })
  });
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
    if (postCount >= maxPosts){
      var listNode = returnFakePost();
      document.getElementById("post-list").appendChild(listNode);
    } else {
      loadNewPost();
    }
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
}
