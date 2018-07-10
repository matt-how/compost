var text = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient."
window.onscroll = function() {loadContent()};

function loadContent() {
  //alert("Pressed!");
  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight-(document.body.offsetHeight/5)) {
        // you're at the bottom of the page
    //alert("load more")
    var listNode = document.createElement("LI");
    listNode.classList.add("post")

    var textnode = document.createTextNode(text);
    listNode.appendChild(textnode);
    document.getElementById("post-list").appendChild(listNode);
  }
}
