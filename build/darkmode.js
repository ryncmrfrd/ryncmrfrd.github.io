//auto set based on time
const hour = new Date().getHours(); 
(hour > 18 || hour < 7) ? 
    document.documentElement.setAttribute('data-theme','dark') : 
    document.documentElement.setAttribute('data-theme','light');

//set switch based on data-theme
document.getElementById("switch").checked = (document.documentElement.getAttribute("data-theme") == "dark");

//handle switch changes
document.getElementById("switch").addEventListener("change", e => {
    (e.target.checked) ? 
        document.documentElement.setAttribute('data-theme','dark') : 
        document.documentElement.setAttribute('data-theme','light') 
});