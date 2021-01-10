var watchtime=document.getElementById("show-time");
 
    setInterval(function(){
        var time= new Date();
        var hours=time.getHours();
        var minutes=time.getMinutes();
        var sec=time.getSeconds()
        
        watchtime.innerHTML= hours+" : "+minutes+" : "+sec+"  ";
        
    },1000)

  
  

//color change
     var aside=document.getElementById("myaside")
    var blackwatch=document.getElementById("black");
    var purplewatch=document.getElementById("purple")
    var pinkwatch=document.getElementById("pink")
    var bluewatch=document.getElementById("blue")
    var redwatch=document.getElementById("red")
    
   redwatch.addEventListener("click",function(){
       var firstimage=aside.firstElementChild;
       firstimage.src="images/redwatch.png"
   })

    blackwatch.addEventListener("click",function(){
        var firstimage=aside.firstElementChild;
        firstimage.src="images/blackwatch.png"
        
    })

    purplewatch.addEventListener("click",function(){
        var firstimage=aside.firstElementChild;
        firstimage.src="images/purplewatch.png"
        
    })

    pinkwatch.addEventListener("click",function(){
        var firstimage=aside.firstElementChild;
        firstimage.src="images/pinkwatch.png"
        
    })

    bluewatch.addEventListener("click",function(){
        var firstimage=aside.firstElementChild;
        firstimage.src="images/bluewatch.png"
        
    })


    heartbutton=document.getElementById("heart-rate-btn");

    heartbutton.addEventListener("click",function(){
        watchtime.style.display="none";
        document.getElementById("heart").style.display="block"
    })

    timebutton=document.getElementById("time-btn");

    timebutton.addEventListener("click",function(){
        watchtime.style.display="block";
        document.getElementById("heart").style.display="none"
   

    })

    var buy=document.getElementById("buy-btn")

    buy.addEventListener("click",function(){

        window.location.assign("https://www.amazon.com/")


    })






