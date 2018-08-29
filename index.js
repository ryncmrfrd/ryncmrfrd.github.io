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

function changeDeviceCSS() {

    if (isMobile.any()) {

        document.getElementById("card").className = "cardmobile";
        document.getElementById("nametext").className = "nametextmobile";
        document.getElementById("quotetext").className = "quotetextmobile";
        
        document.getElementById("button1").className = "buttonmobile";
        document.getElementById("button2").className = "buttonmobile";
        document.getElementById("button3").className = "buttonmobile";
        document.getElementById("button4").className = "buttonmobile";
        document.getElementById("button5").className = "buttonmobile";

    }
    else {

        document.getElementById("card").className = "carddesktop";
        document.getElementById("nametext").className = "nametextdesktop";
        document.getElementById("quotetext").className = "quotetextdesktop";
        
        document.getElementById("button1").className = "buttondesktop";
        document.getElementById("button2").className = "buttondesktop";
        document.getElementById("button3").className = "buttondesktop";
        document.getElementById("button4").className = "buttondesktop";
        document.getElementById("button5").className = "buttondesktop";
    }

}