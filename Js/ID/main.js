$(document).ready(function(){
    w=window.innerWidth;
   
    if(w>290&&w<768){
        $(".outer").css("margin-left",((w-290)/2)+"px");
    }else
    if(w<=290||w>=768){
        $(".outer").css("margin-left",0+"px");
    }
    
      $(".searchToggle").click(function(){
      $(".searchCon").attr("display","block");
  });
  $(".back").click(function(){
      $(".searchCon").attr("display","none");
  });
  var location=window.location.href.toString();
  if(location.endsWith("login")){
     $("#register").css("display","none");
 }else  if(location.endsWith("register")){
     $("#Login").css("display","none");
 }else{
     $("#register").css("display","none");
 }
 
 $(window).resize(function(){
     w=window.innerWidth;
   
    if(w>290&&w<768){
        $(".outer").css("margin-left",((w-290)/2)+"px");
    }else
    if(w<=290||w>=768){
        $(".outer").css("margin-left",0+"px");
    }
 });
 
});/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


