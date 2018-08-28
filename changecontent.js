testExp = new RegExp('Android|webOS|iPhone|iPad|' +
    'BlackBerry|Windows Phone|'  +
    'Opera Mini|IEMobile|Mobile' , 
    'i');
  
    if (testExp.test(navigator.userAgent))
        document.getElementById("div").className = "cardDiv";
        document.getElementById("toptext").className = "topText";
        document.getElementById("bottomtext").className = "bottomText";
    else
        document.getElementById("div").className = "cardDivMobile";
        document.getElementById("toptext").className = "topTextMobile";
        document.getElementById("bottomtext").className = "bottomTextMobile";
