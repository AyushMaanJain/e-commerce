$(document).ready(function(){
    var w=window.innerWidth;
    var marginvar=w/5;
    var marginfix=30+40+15-80;
     $(".body").css("padding-top",marginvar+marginfix+"px");
     if(w>768){
     $(".body").css("width",w-160+"px");
 }else if(w<768){
     $(".body").css("width",w+"px");
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

  });

     $(window).resize(function(){
          w=window.innerWidth;
    var marginvar=w/5;
    var marginfix=30+40+15-80;
     $(".body").css("padding-top",marginvar+marginfix+"px");
    if(w>768){
     $(".body").css("width",w-160+"px");
 }else if(w<768){
     $(".body").css("width",w+"px");
 }
    
     });
 });