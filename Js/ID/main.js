$(document).ready(function(){
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
 }
});/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


