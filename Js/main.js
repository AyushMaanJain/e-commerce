$(document).ready(function(){
    var slide=1;
    var w=window.innerWidth;
    
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
  

 if(w>768){
      $(".home").css("width",(w-250)+"px");
      $(".carousel_container").css("height",(w-300)/3+"px");
        }
else if(w<=768){
      $(".home").css("width",(w+0)+"px");
      $(".carousel_container").css("height",(w-100)/2+"px");  
      }
  
  $("#shiftL").click(function(){
  if(slide===1){
      
      $("#textA").attr("active","false");
      $("#textC").attr("active","true");
      $("#picA").attr("active","false");
      $("#picC").attr("active","true");
      $(".desc").css("background","#00f");
      slide=3;
  // alert(slide);
     } else
  if(slide===3){
      $("#textC").attr("active","false");
      $("#textB").attr("active","true");
      $("#picC").attr("active","false");
      $("#picB").attr("active","true");
      $(".desc").css("background","#000");
       slide=2;
      //alert(slide);
     } else
  if(slide===2){
      $("#textB").attr("active","false");
      $("#textA").attr("active","true");
      $("#picB").attr("active","false");
      $("#picA").attr("active","true");
      $(".desc").css("background","#207");
      slide=1;
      //alert(slide);
     } 
  });
  $("#shiftR").click(function(){
  if(slide===1){
      $("#textA").attr("active","false");
      $("#textB").attr("active","true");
      $("#picA").attr("active","false");
      $("#picB").attr("active","true");
      $(".desc").css("background","#000");
      slide=2;
  // alert(slide);
     } else
  if(slide===3){
      $("#textC").attr("active","false");
      $("#textA").attr("active","true");
      $("#picC").attr("active","false");
      $("#picA").attr("active","true");
      $(".desc").css("background","#207");
      slide=1;
      //alert(slide);
     } else
  if(slide===2){
      $("#textB").attr("active","false");
      $("#textC").attr("active","true");
      $("#picB").attr("active","false");
      $("#picC").attr("active","true");
      $(".desc").css("background","#00f");
      slide=3;
      //alert(slide);
     } 
  });
  
  $(window).resize(function(){
      var w=window.innerWidth;
      if(w>768){
      $(".home").css("width",(w-250)+"px");
      $(".carousel_container").css("height",(w-300)/3+"px");
        }
        else if(w<=768){
      $(".home").css("width",(w+0)+"px");
      $(".carousel_container").css("height",(w-100)/2+"px");  
      }
      
  });
});
