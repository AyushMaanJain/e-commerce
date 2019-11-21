$(document).ready(function(){
  $(".popup").focus(function(){
    $(".options").css("display","block");
    $(".options").css("opacity","1");
  });
  $(".popup").focusout(function(){
    $(".options").css("display","none");
    $(".options").css("opacity","0");
  });
  $(".slideToggle").focus(function(){
     $(".slidenav").css("width","250px"); 
  });
  $(".slideToggle").focusout(function(){
     $(".slidenav").css("width","0px"); 
  });
  function resize(){
      var w=window.innerWidth;
      if(w>768){
          $(".popup").css("display","block");
          $(".slideToggle").css("display","block");
           $(".slidenav").css("width","250px"); 
      }
  }
});