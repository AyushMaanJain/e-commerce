$(document).ready(function(){
    var w=window.innerWidth;
    var marginvar=w/5;
    var marginfix=30+40+15-80;
     $(".body").css("padding-top",marginvar+marginfix+"px");
    if(w>768){
        var bodywidth=w-185;
     $(".body").css("width",bodywidth+"px");
     $(".part").css("width",bodywidth-30+"px");
     if(w>992){
     var halfFormWidth=(bodywidth-30)/2;
     var halfFormInputWidth=halfFormWidth-90;
     $(".half-input").css("width",halfFormInputWidth);
        }else
     if(w<992){
     var halfFormWidth=(bodywidth-30);
     var halfFormInputWidth=halfFormWidth-90;
     $(".half-input").css("width",halfFormInputWidth);
        }
 }
    else if(w<768){
     var bodywidth=w-15;
     $(".body").css("width",bodywidth+"px");
     $(".part").css("width",bodywidth-10+"px");
      var halfFormWidth=(bodywidth-30);
     var halfFormInputWidth=halfFormWidth-65;
     $(".half-input").css("width",halfFormInputWidth);
 }


$(window).scroll(function(){
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;

  var Margin=(winScroll/5.263);
  var maxMargin=40;
  var Top=(winScroll/2.857);
  
  var Size=(winScroll/13.33);
  var minSize=5;
  
  if(w<992){
  Size=(winScroll/20);
  minSize=10;
  //bodyTop=-60;
  Top=(winScroll/3.63);
  }
  var maxSize=20;
if(Margin<38){
$(".uname").css("margin-top",(-1*Top)+"px");
$("img").css("margin-left",(maxMargin-Margin)+"vw");
$("img").css("margin-right",(maxMargin-Margin)+"vw");
$("img").css("width",(maxSize-Size)+"vw");
$("img").css("height",(maxSize-Size)+"vw");

}else
if(Margin>38){
    $("img").css("margin-left",2+"vw");
    $("img").css("margin-right",2+"vw");
  if(w<992){    
    $("img").css("width",10+"vw");
    $("img").css("height",10+"vw");
    $(".uname").css("margin-top",-60+"px");
  }else if(w>992){
    $("img").css("width",6+"vw");
    $("img").css("height",6+"vw");
    $(".uname").css("margin-top",-70+"px");
            }}
    var scrollVal=1;
if(winScroll>=1){
    scrollVal=1;
}
if(winScroll>=790){
    scrollVal=2;
}
if(winScroll>=1150){
    scrollVal=3;
}
if(winScroll>=1320){
    scrollVal=4;
}
if(winScroll>=1930){
    scrollVal=5;
}
if(winScroll>=2100){
    scrollVal=6;
}
//$(".uname").html("|"+winScroll+"|");
for(var i=1;i<=6;i++){
    if(scrollVal===i){
        $("#li"+i).attr("state","active");
    }
    else{
    $("#li"+i).attr("state","inactive");
}
}
  }
          );

$(window).resize(function(){
          w=window.innerWidth;
    var marginvar=w/5;
    var marginfix=30+40+15-80;
     $(".body").css("padding-top",marginvar+marginfix+"px");
     
        if(w>768){
        var bodywidth=w-185;
     $(".body").css("width",bodywidth+"px");
     $(".part").css("width",bodywidth-30+"px");
     if(w>992){
     var halfFormWidth=(bodywidth-30)/2;
     var halfFormInputWidth=halfFormWidth-90;
     $(".half-input").css("width",halfFormInputWidth);
        }else
     if(w<992){
     var halfFormWidth=(bodywidth-30);
     var halfFormInputWidth=halfFormWidth-90;
     $(".half-input").css("width",halfFormInputWidth);
        }
 }
        else if(w<768){
     var bodywidth=w-15;
     $(".body").css("width",bodywidth+"px");
     $(".part").css("width",bodywidth-10+"px");
     var halfFormWidth=(bodywidth-30);
     var halfFormInputWidth=halfFormWidth-65;
     $(".half-input").css("width",halfFormInputWidth);
 }
     });
 });