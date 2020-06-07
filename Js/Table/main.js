$(document).ready(function(){
    var w=window.innerWidth;
    var h=window.innerHeight;
   var tabcount=$(".tabs").find("li").length;
   var len=(w/tabcount);
   
   var delPop=$("#delete");
   
   //tab button part
    var button=$(".tabs").find("button");
    button.css("width",len+"px");
    button.attr("active","false");
    button.first().attr("active","true");
    button.click(function(){
        button.attr("active","false");
        $(this).attr("active","true");
        var tar=$(this).attr("target");
        switch(tar){
            case "tab-1":$(".tab_host").attr("theme","green");
                break;
            case "tab-2":$(".tab_host").attr("theme","blue");
                break;
            case "tab-3":$(".tab_host").attr("theme","margenta");
                break;
            case "tab-4":$(".tab_host").attr("theme","saffron");
                break;
            default:
        }
        $(".tab_body").attr("visible","false");
        $("#"+tar).attr("visible","true");
    });
    //tab body
    var tabBody=$(".tab_body");
    tabBody.css("width",w-8+"px");
    tabBody.css("height",h-70+"px");
        //table button
        var tButton=tabBody.find("button");
        tButton.click(function(){
        var data=$(this).attr("get").toString();
        var act=$(this).attr("action").toString();
        
        if(data.startsWith("user")){
            var id=$("#"+data).find("ID").html();
            delPop.find(".confim").attr("theme","green");
            if(act==="delete"){
              
              delPop.fadeIn();
              delPop.find("class").html("<u>User</u>");
              delPop.find("ID").html("<u>"+id+"</u>");
              delPop.find("input").attr("value","user");
              delPop.find("input").next().attr("value",id);
            }
            else if(act==="edit"){
                           var name,email,pass,auth;
            name=$("#"+data).find("name").html();
            email=$("#"+data).find("email").html();
            pass=$("#"+data).find("pass").html();
            auth=$("#"+data).find("auth").html();
            
               var inputs=$("#user-update");
               inputs.fadeIn();
               inputs.find("[name=id]").val(id);
               inputs.find("[name=name]").val(name);
               inputs.find("[name=email]").val(email);
               inputs.find("[name=pass]").val(pass);
               inputs.find("[name=auth]").val(auth);
               
               inputs.find(".boolean").attr("value",auth);
            }

    }
    else if(data.startsWith("product")){
        var id=$("#"+data).find("ID").html();
        delPop.find(".confim").attr("theme","blue");
            if(act==="delete"){
              delPop.fadeIn();
              delPop.find("class").html("<u>Product</u>");
              delPop.find("ID").html("<u>"+id+"</u>");
              delPop.find("input").attr("value","product");
              delPop.find("input").next().attr("value",id);
            }
                        else if(act==="edit"){
                           var name,dev,group,cat,date,trend,price;
            var tr=$("#"+data).find("td");
            name=$("#"+data).find("name").html();
            dev=$("#"+data).find("dev").html();
            group=$("#"+data).find("group").html();
            cat=$("#"+data).find("category").html();
            date=$("#"+data).find("date").html();
            trend=$("#"+data).find("trend").html();
            price=$("#"+data).find("price").html();
               var inputs=$("#product-update");
               
               inputs.fadeIn();
               inputs.find("[name=id]").val(id);
               inputs.find("[name=name]").val(name);
               inputs.find("[name=dev]").val(dev);
               var xx=inputs.find("[name=dev]").find("[value="+dev+"]").html();
               inputs.find("[name=dev]").find("span").html(xx);
               
                inputs.find("[name=group]").val(group);
               var xx=inputs.find("[name=group]").find("[value="+group+"]").html();
               inputs.find("[name=group]").find("span").html(xx);
               inputs.find("[name=date]").val(date);
               inputs.find("[name=category]").val(cat);
               inputs.find("[name=trend]").val(trend);
               inputs.find("[name=price]").val(price);
            }
    }else if(data.startsWith("developer")){
        var id=$("#"+data).find("ID").html();
        delPop.find(".confim").attr("theme","margenta");
            if(act==="delete"){
              delPop.fadeIn();
              delPop.find("class").html("<u>Developer</u>");
              delPop.find("ID").html("<u>"+id+"</u>");
              delPop.find("input").attr("value","developer");
              delPop.find("input").next().attr("value",id);
            }else if(act==="edit"){
               var name,desc;
                var tr=$("#"+data).find("td");
            name=$("#"+data).find("name").html();
            desc=$("#"+data).find("desc").html();
              var inputs=$("#developer-update");
               
               inputs.fadeIn();
               inputs.find("[name=id]").val(id);
               inputs.find("[name=name]").val(name);
               inputs.find("[name=desc]").val(desc);
            
            }
    }else if(data.startsWith("group")){
        var id=$("#"+data).find("ID").html();
        delPop.find(".confim").attr("theme","saffron");
            if(act==="delete"){
              delPop.fadeIn();
              delPop.find("class").html("<u>Group</u>");
              delPop.find("ID").html("<u>"+id+"</u>");
              delPop.find("input").attr("value","group");
              delPop.find("input").next().attr("value",id);
            }else if(act==="edit"){
                var name,desc;
                var tr=$("#"+data).find("td");
            name=$("#"+data).find("name").html();
            desc=$("#"+data).find("desc").html();
              var inputs=$("#group-update");
               
               inputs.fadeIn();
               inputs.find("[name=id]").val(id);
               inputs.find("[name=name]").val(name);
               inputs.find("[name=desc]").val(desc);
            }
    }
        });
        // popup
        
    $(".blur_pop").find("button").click(function(){
        var type=$(this).attr("type").toString();
        if(type==="reset"){
           $(this).parent().parent().parent().fadeOut();
        }
    });
    //boolean box
    $("span.yes").click(function(){
        var boolean=$(this).parent();
        var bool=boolean.attr("value").toString();
        if(bool==="false"){
            boolean.attr("value","true");
            boolean.find("input").attr("value","true");
        }
    });
    $("span.no").click(function(){
        var boolean=$(this).parent();
        
        var bool=boolean.attr("value").toString();
        if(bool==="true"){
            boolean.attr("value","false");
            boolean.find("input").attr("value","false");
        }
    });
    //drop down
    $("div.modified").find("li").click(function(){
        var sel=$(this).html();
        $(this).parent().parent().find("span").html(sel);
        var val=$(this).val().toString();
        $(this).parent().parent().parent().find("select").val(val);
    });
    $("div.modified").click(function(){
        //alert("clicked");
       $(this).toggleClass("active"); 
       $(this).find("ul").slideToggle(); 
    });
    $(window).resize(function(){
        w=window.innerWidth;
        h=window.innerHeight;
        len=(w/tabcount);
    //console.log(w/tabcount);
        button.css("width",len+"px");
        
        tabBody.css("width",w-8+"px");
        tabBody.css("height",h-70+"px");
    });
});