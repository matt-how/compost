var text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo sodales est, eu dapibus lorem ullamcorper quis. Sed tempus ultrices urna. Duis et tincidunt erat. Ut mattis egestas libero a efficitur. Vestibulum at quam elit. Vivamus a interdum tellus. In pretium sit amet elit ac placerat. Fusce odio lorem, dignissim vel est vitae, volutpat varius ex. Etiam eget lacus vel felis iaculis lobortis eget et nunc. Mauris at lorem id ipsum efficitur facilisis quis et purus."
window.onscroll = function() {loadContent()};

function loadContent() {
  //alert("Pressed!");
  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        // you're at the bottom of the page
    //alert("load more")
    var listNode = document.createElement("LI");
    listNode.classList.add("post")

    var textnode = document.createTextNode(text);
    listNode.appendChild(textnode);
    document.getElementById("post-list").appendChild(listNode);
  }
}
