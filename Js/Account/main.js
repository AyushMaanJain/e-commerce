$(document).ready(function(){
     
    /*if(url.toString().includes("?user")){
        $("#cart").css("display","none");
        $("#tran").css("display","none");
        $("#user").css("display","block");
    }else
    if(url.toString().includes("?cart")){
        $("#cart").css("display","block");
        $("#tran").css("display","none");
        $("#user").css("display","none");
    }else
    if(url.toString().includes("?transection")){
        $("#cart").css("display","none");
        $("#tran").css("display","block");
        $("#user").css("display","none");
    }*/
    
    var w=window.innerWidth; 
    var minSize=0;
    var maxSize=0;
    var minMargin=2;
    var maxMargin=0;
    var textMargins=0;
    var bodywidth=0;
    var bodypadding=0;
    var halfFormSize=0;
    var paymentWay=0;
if(w>992){
    bodypadding=20/100*w;
    bodywidth=w-175;
    halfFormSize=(bodywidth-40)/2;
    minSize=8;
    maxSize=20;
    maxMargin=40;
    textMargins=6/100*w;
    paymentWay=40+30;


}else
if(w>768){
    bodypadding=25/100*w;
    bodywidth=w-160;
    minSize=10;
    maxSize=25;
    maxMargin=37.5;
    textMargins=8/100*w;
    halfFormSize=(bodywidth-40);
    paymentWay=40+30;

    

}else
if(w<=768){
    bodypadding=30/100*w;
    bodywidth=w;
    minSize=13;
    maxSize=30;
    maxMargin=35;
    textMargins=11/100*w;
    halfFormSize=bodywidth-40;
    paymentWay=30;


    
}

{$(".body").css("width",bodywidth+"px");
$(".part").css("width",bodywidth-40+"px");

$(".payment-way").css("width",(bodywidth-paymentWay)+"px");
$(".half-input").css("width",halfFormSize-40-55+"px");}



$(window).resize(function(){
   w=window.innerWidth;
if(w>992){
    bodypadding=20/100*w;
    bodywidth=w-160;
    halfFormSize=(bodywidth-40)/2;
    minSize=8;
    maxSize=20;
    maxMargin=40;
    textMargins=6/100*w;
    paymentWay=40+30;

   
}else
if(w>768){
    bodypadding=25/100*w;
    bodywidth=w-160;
    minSize=10;
    maxSize=25;
    maxMargin=37.5;
    textMargins=8/100*w;
    halfFormSize=(bodywidth-40);
    paymentWay=40+30;

    
}else
if(w<=768){
    bodypadding=30/100*w;
    bodywidth=w;
    minSize=13;
    maxSize=30;
    maxMargin=35;
    textMargins=11/100*w;
    halfFormSize=bodywidth-40;
    paymentWay=30;

    
}

{$(".body").css("width",bodywidth+"px");
$(".part").css("width",bodywidth-40+"px");

$(".payment-way").css("width",(bodywidth-paymentWay)+"px");
$(".half-input").css("width",halfFormSize-40-55+"px");}
});
});