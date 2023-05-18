function hambugermenu() {
    var x = document.getElementById("navbar");
    if (x.style.height === 100 + "vh") {
        x.style.height = 80 + "px";
        $(".bar1").css({"top":0+"px","transform":"rotate(0deg)"});
        $(".bar2").css("opacity",1);
        $(".bar3").css({"top":30+"px","transform":"rotate(0deg)"});
    } else {
        x.style.height = 100 + "vh";
        $(".bar1").css({"top":15+"px","transform":"rotate(-45deg)"});
        $(".bar2").css("opacity",0);
        $(".bar3").css({"top":15+"px","transform":"rotate(45deg)"});
  
    }
  }
  

