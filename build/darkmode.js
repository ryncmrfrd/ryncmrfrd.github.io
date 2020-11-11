const body = document.documentElement

//auto set based on time
const hour = new Date().getHours(); 
(hour > 18 || hour < 7) ? 
    body.setAttribute('data-theme','dark') : 
    body.setAttribute('data-theme','light');

//set switch based on data-theme
document.getElementById("switch").checked = (body.getAttribute("data-theme") == "dark");

//handle switch changes
document.getElementById("switch").addEventListener("change", e => {
    e.target.checked ? 
        body.setAttribute('data-theme','dark') : 
        body.setAttribute('data-theme','light') 
});