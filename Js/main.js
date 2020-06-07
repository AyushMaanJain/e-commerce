$(document).ready(function(){
    var slide=1;
    var slideLength=0;
    
    try{
    var dom_el = document.querySelector("[ng-controller='ControllA']");
    var ng_el = angular.element(dom_el);
    var ng_el_scope = ng_el.scope();
    var slideLength = ng_el_scope.len;
    console.log(slideLength.toString());
    }catch(excep){
       console.log(excep.toString());
    }
    
    
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
  


 if(w>768){
      $(".body").css("width",(w-250)+"px");
      $(".carousel_container").css("height",(w-300)/3+"px");
      if(w>992){
          $(".card").css("width",((w-250)/5)-10+"px");
          $(".card > a > img").css("width",((w-250)/5)-10+"px");
          $(".card > a > img").css("height",((w-250)/5)-10+"px");
      }else if(w<992){
          $(".card").css("width",((w-250)/4)-10+"px");
          $(".card > a > img").css("width",((w-250)/4)-10+"px");
          $(".card > a > img").css("height",((w-250)/4)-10+"px");
      }
        }
else if(w<=768){
      $(".body").css("width",(w+0)+"px");
      $(".carousel_container").css("height",(w-100)/2+"px"); 
      $(".card").css("width",w-10+"px");
      $(".card > a > img").css("width",(w/3)+"px");
      $(".card > a > img").css("height",(w/3)+"px");
      }
  
  $("#shiftL").click(function(){
      if(slide===1){
          $("#text"+slide).attr("active","false");
          $("#pic"+slide).attr("active","false");
          $("#port"+slide).attr("active","false");
          slide=slideLength;
          $("#text"+slide).attr("active","true");
          $("#pic"+slide).attr("active","true");
          $("#port"+slide).attr("active","true");
      }else if(slide>1){
          $("#text"+slide).attr("active","false");
          $("#pic"+slide).attr("active","false");
          $("#port"+slide).attr("active","false");
          slide--;
          $("#text"+slide).attr("active","true");
          $("#pic"+slide).attr("active","true");
          $("#port"+slide).attr("active","true");
      }
      
  });
  $("#shiftR").click(function(){
      
      if(slide===slideLength){
          $("#text"+slide).attr("active","false");
          $("#pic"+slide).attr("active","false");
          $("#port"+slide).attr("active","false");
          slide=1;
          $("#text"+slide).attr("active","true");
          $("#pic"+slide).attr("active","true");
          $("#port"+slide).attr("active","true");
      }else if(slide<slideLength){
          $("#text"+slide).attr("active","false");
          $("#pic"+slide).attr("active","false");
          $("#port"+slide).attr("active","false");
          slide++;
          $("#text"+slide).attr("active","true");
          $("#pic"+slide).attr("active","true");
          $("#port"+slide).attr("active","true");
      }
 
  });
  
  $(window).resize(function(){
      var w=window.innerWidth;
      if(w>768){
      $(".body").css("width",(w-250)+"px");
      $(".carousel_container").css("height",(w-300)/3+"px");
      if(w>992){
          $(".card").css("width",((w-250)/5)-10+"px");
          $(".card > a > img").css("width",((w-250)/5)-10+"px");
          $(".card > a > img").css("height",((w-250)/5)-10+"px");
      }else if(w<992){
          $(".card").css("width",((w-250)/4)-10+"px");
          $(".card > a > img").css("width",((w-250)/4)-10+"px");
          $(".card > a > img").css("height",((w-250)/4)-10+"px");
      }
      
        }
       else if(w<=768){
      $(".body").css("width",(w+0)+"px");
      $(".carousel_container").css("height",(w-100)/2+"px"); 
      $(".card").css("width","100%");
      $(".card > a > img").css("width",(w/3)+"px");
      $(".card > a > img").css("height",(w/3)+"px");
      }
      
  });
});
