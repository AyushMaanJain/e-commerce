$(document).ready(function(){
    var w=window.innerWidth;
    var headerHeight=70;
    
    if(w>900){
    $(".head").css("margin-left",(w-900)/2+"px");}
    else if(w<900){
    $(".head").css("margin-left",0+"px");
if(w<544){
    headerHeight=0;
}
}

    var header=document.getElementsByClassName("header");
    var firstHead=header[0].offsetTop;
$(".body").css("padding-top",firstHead+200+"px");

    $(window).scroll(function(){
    var scrolled=window.pageYOffset;
    var scrollForHead=scrolled/firstHead;
    var scrollForHeadSize=70-(scrolled-firstHead);
    if (scrolled > firstHead) {
    $(".header").addClass("fix-head");
    $(".header").css("background","rgba(153,51,204,1)");
    $(".header").find(".fixed-container").slideUp();

  } else {
     $(".header").find(".fixed-container").slideDown(); 
    $(".fixed-container").css("margin-top",25+headerHeight+"px");
    $(".header").removeClass("fix-head");
    $(".header").css("background","rgba(153,51,204,"+scrollForHead+")");
  }
  
});

    $(window).resize(function(){
       w=window.innerWidth;  
        if(w>900){
    $(".head").css("margin-left",(w-900)/2+"px");}
        else if(w<900){
    $(".head").css("margin-left",0+"px");
if(w<544){
    headerHeight=0;
}
}

    header=document.getElementsByClassName("header");
    firstHead=header[0].offsetTop;
    });
});