var body = document.documentElement,
    chkbox = document.getElementById("switch"),
    hour = new Date().getHours();

//handle switch changes
chkbox.addEventListener("change", e => {
    e.target.checked ? 
        body.setAttribute('data-theme','dark') : 
        body.setAttribute('data-theme','light');
});

//set switch based on data-theme
body.getAttribute("data-theme") == "dark" ? chkbox.click() : "";

if(!navigator.geolocation) locationFallback("Geolocation API not supported by browser.");
else{
    navigator.permissions.query({ name: 'geolocation' }).then(function(result) {
        if(result.state == 'granted') {
            getLocation();
        } else{
            document.querySelector("#prompt").addEventListener("click", getLocation)
        }
    });
}

//get location and run autodark mode fn
const getLocation = () => {
    navigator.geolocation.getCurrentPosition(d => {
        fetch(`https://api.sunrise-sunset.org/json?lat=${d.coords.latitude}&lng=${d.coords.longitude}&date=today&formatted=0`)
        .then(r => r.json())
        .then(d => { 
            let hour_srse = new Date(Date.parse(d.results.sunrise)).getHours(),
                hour_sset = new Date(Date.parse(d.results.sunset)).getHours();
            (hour > hour_sset || hour < hour_srse) && (!chkbox.checked) ? chkbox.click() : "";
            document.querySelector(".swichPrompt").classList.add("clicked");
        })
        .catch( e => locationFallback(e));
    }, e => locationFallback(e));
}

const locationFallback = (e) => console.warn("Error fetching sunrise/sunset times. Details: ", e);