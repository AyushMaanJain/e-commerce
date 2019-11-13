$(document).ready(function(){

    var openSlider=false;
    
    function openSide(widthable){
        try{ 
        $("#sidenav").width(widthable);
         openSlider=true;}
     catch(e){
         console.error(e);
     }
    }
    function closeSide(){
         $("#sidenav").width(0);
         openSlider=false;
    }
    
    var width=window.innerWidth;
  var height=window.innerHeight; 
    if(width>768){
        
       openSide(200);
    }
    else
    if(width<768){
       
        closeSide();
    }
    
     $("#navTog").click(function(){
    
         if(openSlider){
         closeSide();
     } else if(!openSlider){
         openSide(300);
     }
  });
  
    $(window).resize(function(){
  width=window.innerWidth;
  height=window.innerHeight; 
    if(width>768){
       openSide(200);
    }
    else
    if(width<768){
        closeSide();
    }
    
    //cardcontainer
    var conw=$(".card-container").width();
    var count=(conw%216)/4;
    $(".fix-card").html(count+"px");
    try{
        $(".card-container").css("margin-left",count);
    }catch(e){
        console.log(e);
    }
    });
 
  
  
  
});
