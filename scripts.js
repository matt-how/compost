var text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo sodales est, eu dapibus lorem ullamcorper quis. Sed tempus ultrices urna. Duis et tincidunt erat. Ut mattis egestas libero a efficitur. Vestibulum at quam elit. Vivamus a interdum tellus. In pretium sit amet elit ac placerat. Fusce odio lorem, dignissim vel est vitae, volutpat varius ex. Etiam eget lacus vel felis iaculis lobortis eget et nunc. Mauris at lorem id ipsum efficitur facilisis quis et purus."
window.onscroll = function() {myFunction()};

function myFunction() {
  var h = document.documentElement,
  b = document.body,
  st = 'scrollTop',
  sh = 'scrollHeight';
  var percent = (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;
  // if the scroll is more than 75% from the top, load more content.
  if(percent > 0.75) {
    var divv = document.createElement("LI");
    var textnode = document.createTextNode(text);
    divv.appendChild(textnode);
    document.getElementById('post-list').appendChild(divv);
  }
}
