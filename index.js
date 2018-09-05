var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

function changeCSSBasedOnDevice() {

    if (w > h){

        document.getElementById("button1").className = "buttonHorizontal";
        document.getElementById("button2").className = "buttonHorizontal";
        document.getElementById("button3").className = "buttonHorizontal";
        document.getElementById("button4").className = "buttonHorizontal";
        document.getElementById("button5").className = "buttonHorizontal";
        document.getElementById("card").className = "cardhorizontal";    
    }
    else{

        document.getElementById("button1").className = "buttonVertical";
        document.getElementById("button2").className = "buttonVertical";
        document.getElementById("button3").className = "buttonVertical";
        document.getElementById("button4").className = "buttonVertical";
        document.getElementById("button5").className = "buttonVertical";
        document.getElementById("card").className = "cardvertical";
    
    }

}
