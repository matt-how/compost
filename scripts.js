
  var text = "<div class='post'>\
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo sodales est, eu dapibus lorem ullamcorper quis. Sed tempus ultrices urna. Duis et tincidunt erat. Ut mattis egestas libero a efficitur. Vestibulum at quam elit. Vivamus a interdum tellus. In pretium sit amet elit ac placerat. Fusce odio lorem, dignissim vel est vitae, volutpat varius ex. Etiam eget lacus vel felis iaculis lobortis eget et nunc. Mauris at lorem id ipsum efficitur facilisis quis et purus. Vestibulum eleifend ex massa, vitae feugiat sem malesuada vel. Pellentesque sit amet ipsum vehicula, imperdiet odio a, faucibus tortor. Donec purus justo, porttitor sit amet consequat quis, fermentum a nibh.\
\
  Etiam iaculis est in orci bibendum laoreet. Nunc nec mollis sapien. Morbi dapibus, metus non euismod tincidunt, risus libero volutpat odio, eu mollis enim tortor id libero. Praesent id placerat sapien, rhoncus convallis enim. Praesent convallis porta libero id placerat. Maecenas tincidunt nisl eget lacus porttitor efficitur. Fusce iaculis vestibulum augue, vel semper lectus auctor ut. Sed lacinia venenatis finibus. Aenean auctor enim vel vulputate dignissim.\
\
  Vestibulum nibh dui, gravida nec dictum nec, euismod porta augue. Aenean imperdiet leo nisi, eu dictum augue blandit et. Etiam quam dolor, aliquam et fermentum vel, laoreet at erat. Aenean venenatis erat nec vestibulum dictum. Nam vehicula laoreet orci ac luctus. Curabitur euismod pretium lacus, vel blandit lectus hendrerit vitae. Nunc ac volutpat urna, sit amet semper eros. Integer mollis fringilla erat. Quisque finibus quam vitae quam dignissim, vitae dignissim metus faucibus. Donec vel tellus eros.\
\
  Mauris eleifend augue quis dui pellentesque viverra. Praesent sed leo at massa viverra commodo. Praesent eleifend fermentum augue sed dictum. Praesent quam metus, tempus ut rhoncus id, lacinia ut magna. In hac habitasse platea dictumst. Nullam aliquet dui at tellus malesuada euismod. In fringilla, erat sit amet vestibulum pharetra, ipsum elit efficitur odio, vitae vestibulum odio nisl ut felis. Donec ac justo ornare, facilisis neque eu, auctor nibh. Maecenas et lectus vulputate, porta lectus et, suscipit neque. Phasellus malesuada neque sed elit commodo bibendum. Maecenas imperdiet enim et augue cursus, accumsan mattis lorem tincidunt. Donec id commodo tellus. Pellentesque nec ex eget neque tristique pretium quis et metus. Proin facilisis dignissim ex, ac suscipit neque lobortis id. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean posuere nec nunc laoreet lacinia.\
\
  Integer pellentesque tortor id neque ultrices elementum. Vivamus porta mi eget mi tincidunt sollicitudin. Maecenas fermentum ex ac nulla consequat semper. Phasellus volutpat odio ipsum, in pharetra erat eleifend sit amet. Nulla non erat et diam auctor fringilla. Donec non nunc id ipsum porttitor fringilla ut porttitor risus. Duis sodales bibendum eros, varius cursus ante ultrices sed.\
  <br>\
  <br>\
  </div>"

  window.onscroll = function() {myFunction()};

 function myFunction() {
   var h = document.documentElement,
    b = document.body,
    st = 'scrollTop',
    sh = 'scrollHeight';
    var percent = (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;
   // if the scroll is more than 90% from the top, load more content.
   if(percent > 0.75) {
    $("post-list").innerHTML += text;
   }
 }
