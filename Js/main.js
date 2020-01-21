$(document).ready(function(){
    var slide=1;
    var sideOpen=false;
    var popup=false;
    var w=window.innerWidth;
    
  $(".popup").click(function(){
      if(popup){
          $(".options").attr("display","none");
          popup=false;
      }else if(!popup){
    $(".options").attr("display","block");
    popup=true;
      }
  });
  $(".slideToggle").click(function(){
    $(".options").attr("display","none");
    popup=false;
  });
  $(".searchToggle").click(function(){
    $(".options").attr("display","none");
    popup=false;
  });
  $(".options").click(function(){
    $(".options").attr("display","none");
    popup=false;
  });
  $(".slideToggle").click(function(){
      if(sideOpen){
        $(".slidenav").attr("expand","false");
        $(".slideToggle").html("&#9776;");
        sideOpen=false;
      }else if(!sideOpen){
     $(".slidenav").attr("expand","true");
     $(".slideToggle").html("&#9747;");
     $(".slideToggle").css("font-weight","bolder");
     sideOpen=true;
      }
  });
  $(".slideToggle").focusout(function(){
    $(".slidenav").attr("expand","false");
    $(".slideToggle").html("&#9776;");
    sideOpen=false;
  });
  $(".searchToggle").click(function(){
      $(".searchCon").attr("display","block");
  });
  $(".back").click(function(){
      $(".searchCon").attr("display","none");
  });
  
  $(".sub-card").click(function(){
      
      try{
      var href=$(this).attr("href");
      window.open(href,"_self");
      }catch(e){
      var error=e;
      alert(error);
      }
      });

 if(w>768){
      $(".body").css("width",(w-250)+"px");
      $(".carousel_container").css("height",(w-300)/3+"px");
        }
else if(w<=768){
      $(".body").css("width",(w+0)+"px");
      $(".carousel_container").css("height",(w-100)/2+"px");  
      }
  
  $("#shiftL").click(function(){
  if(slide===1){
      
      $("#textA").attr("active","false");
      $("#textC").attr("active","true");
      $("#picA").attr("active","false");
      $("#picC").attr("active","true");
      $("#port1").attr("active","false");
      $("#port3").attr("active","true");
      $(".desc").css("background","#00f");
      slide=3;
  // alert(slide);
     } else
  if(slide===3){
      $("#textC").attr("active","false");
      $("#textB").attr("active","true");
      $("#picC").attr("active","false");
      $("#picB").attr("active","true");
      $("#port3").attr("active","false");
      $("#port2").attr("active","true");
      $(".desc").css("background","#000");
       slide=2;
      //alert(slide);
     } else
  if(slide===2){
      $("#textB").attr("active","false");
      $("#textA").attr("active","true");
      $("#picB").attr("active","false");
      $("#picA").attr("active","true");
      $("#port2").attr("active","false");
      $("#port1").attr("active","true");
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
      $("#port1").attr("active","false");
      $("#port2").attr("active","true");
      $(".desc").css("background","#000");
      slide=2;
  // alert(slide);
     } else
  if(slide===3){
      $("#textC").attr("active","false");
      $("#textA").attr("active","true");
      $("#picC").attr("active","false");
      $("#picA").attr("active","true");
      $("#port3").attr("active","false");
      $("#port1").attr("active","true");
      $(".desc").css("background","#207");
      slide=1;
      //alert(slide);
     } else
  if(slide===2){
      $("#textB").attr("active","false");
      $("#textC").attr("active","true");
      $("#picB").attr("active","false");
      $("#picC").attr("active","true");
      $("#port2").attr("active","false");
      $("#port3").attr("active","true");
      $(".desc").css("background","#00f");
      slide=3;
      //alert(slide);
     } 
  });
  
  $(window).resize(function(){
      var w=window.innerWidth;
      if(w>768){
      $(".body").css("width",(w-250)+"px");
      $(".carousel_container").css("height",(w-300)/3+"px");
        }
        else if(w<=768){
      $(".body").css("width",(w+0)+"px");
      $(".carousel_container").css("height",(w-100)/2+"px");  
      }
      
  });
});
