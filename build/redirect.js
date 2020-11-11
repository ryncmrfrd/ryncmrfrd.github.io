const changeRedirectNum = (elem) => {
    var currentNum = Number(elem.innerText)
    currentNum-1 == 0 ?
        window.location.replace('/') :
        (elem.innerText = currentNum-1, setTimeout(() => changeRedirectNum(elem), 1000))
}

changeRedirectNum(document.getElementById("redirectNum"))