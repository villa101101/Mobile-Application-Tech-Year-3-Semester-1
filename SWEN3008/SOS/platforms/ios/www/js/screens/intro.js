var intro =`

<section class="fill theme" style="background-color:lightblue; height:100%; width:100%">
    <img src="img/giphy.gif" style="padding-top:180px; padding-bottom:180px;"></img>

</section>

`;

$("#intro").html(intro);

setTimeout(function(){
    $.mobile.navigate("#home", { transition: 'fade', reverse: false})
  }, 2000);