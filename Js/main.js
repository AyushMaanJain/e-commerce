$(document).ready(function(){
  $(".popup").focus(function(){
    $(".options").attr("display","block");
  });
  $(".popup").focusout(function(){
    $(".options").attr("display","none");
   
  });
  $(".slideToggle").focus(function(){
     $(".slidenav").attr("expand","true"); 
  });
  $(".slideToggle").focusout(function(){
    $(".slidenav").attr("expand","false");
  });
  $(".searchToggle").click(function(){
      $(".searchCon").attr("display","block");
  });
  $(".back").click(function(){
      $(".searchCon").attr("display","none");
  });
  
  $(window).resize(function(){
      var w=window.innerWidth;
      if(w>768){
      $(".home").css("width",(w-250)+"px");
        }else if(w<=768){
      $(".home").css("width","100%");
        }
      
  });
  
});
