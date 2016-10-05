$(document).ready(function(){  
  
  //NAV small browser-width
  var open=false;
  $(".menu-icon").click(function(){
    if(!open)
      {
        $(this).addClass('open');
        $("#nav-main").addClass('open');
        $("#nav-small").fadeIn(500);
        open=true;
      }
    else
      {
        $(this).removeClass('open');
        $("#nav-main").removeClass('open');
        $("#nav-small").fadeOut(500);       
        open=false;
      }
  });  
});