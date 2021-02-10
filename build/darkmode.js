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

document.querySelector("#prompt").addEventListener("click", d => {
    //auto set based on time
    if(!navigator.geolocation) location_fb();
    else {
        navigator.geolocation.getCurrentPosition(d => {
            fetch(`https://api.sunrise-sunset.org/json?lat=${d.coords.latitude}&lng=${d.coords.longitude}&date=today&formatted=0`)
            .then(r => r.json())
            .then(d => { 
                let hour_srse = new Date(Date.parse(d.results.sunrise)).getHours(),
                    hour_sset = new Date(Date.parse(d.results.sunset)).getHours();
                (hour > hour_sset || hour < hour_srse) && (!chkbox.checked) ? chkbox.click() : "";
            })
            .catch( e => location_fb(e));
        }, e => location_fb(e));
    }
});

//fallback fn for auto set dark mode
const location_fb = (e) => {
    (hour > 18 || hour < 7) && (!chkbox.checked) ? chkbox.click() : "";
    console.warn("Error fetching sunrise/sunset times. Details: ", e)
}