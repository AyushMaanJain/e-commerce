
$(document).ready(function(){
var url=window.location.href;
    if(url.toString().endsWith("?cart")){
        $("#cart").css("display","block");
        $("#tran").css("display","none");
    }else
    if(url.toString().endsWith("?transection")){
        $("#cart").css("display","none");
        $("#tran").css("display","block");
    }
    
    var w=window.innerWidth; 
    var bodywidth=0;
    var partwidth=0;
    if(w>768){
        bodywidth=w-170;
        partwidth=bodywidth-50;
    }else if(w<768){
        bodywidth=w;
        partwidth=bodywidth-20;
    }
    
    $(".body").css("width",bodywidth+"px");
    $(".part").css("width",partwidth+"px");
    
    $(window).resize(function(){
    var w=window.innerWidth; 
    
    if(w>768){
        bodywidth=w-170;
        partwidth=bodywidth-50;
    }else if(w<768){
        bodywidth=w;
        partwidth=bodywidth-20;
    }
    
    $(".body").css("width",bodywidth+"px");
    $(".part").css("width",partwidth+"px");
    });
});