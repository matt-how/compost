var text = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient."
window.onscroll = function() {loadContent()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function loadContent() {
  //alert("Pressed!");
  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight-(document.body.offsetHeight/5)) {
        // you're at the bottom of the page
    //alert("load more")
    var listNode = document.createElement("LI");
    listNode.classList.add("post")
    var divNode = document.createElement("DIV");
    divNode.classList.add("col-10");
    divNode.classList.add("text");
    var textNode = document.createTextNode(text);
    divNode.appendChild(textNode);
    listNode.appendChild(divNode);
    var sideDiv = document.createElement("DIV");
    sideDiv.classList.add("col-2");
    sideDiv.classList.add("side");
    var testText = document.createTextNode("test");
    sideDiv.appendChild(testText);
    listNode.appendChild(sideDiv);
    document.getElementById("post-list").appendChild(listNode);
  }
if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
