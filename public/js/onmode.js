const onpageload = localStorage.getItem("theme");
const element = document.body;
element.classList.add(onpageload)
const themes = document.getElementById("theme");
const mode = document.querySelector(".mode");
const moonmode = "../icons/moon.png"
const sunmode = "../icons/sun.png"
themes.classList.add("light")
themes.textContent = "light";
document.cookie= "theme = light";

themes.textContent = localStorage.getItem("theme")
let theme = localStorage.getItem("theme")
if(theme === "light"){
    mode.src = moonmode;
}
else{
    mode.src = sunmode;
}
function themetoggle(){
    let element = document.body;
    mode.src = "../icons/sun.png";
    element.classList.toggle("dark");
    let theme = localStorage.getItem("theme");
    document.cookie = `theme = ${theme}`
    if(theme && theme === "dark"){
        localStorage.setItem("theme" , "light");
        element.classList.add("light");
        element.classList.remove("dark");
        console.log("it's a light theme");
        mode.src = moonmode;
    }
    else{
        localStorage.setItem("theme" , "dark")
        console.log("it's a dark theme");
        element.classList.add("dark");
        element.classList.remove("light");
        mode.src = sunmode;
    }
    document.getElementById("theme").textContent = localStorage.getItem("theme");
<<<<<<< HEAD
}
=======
}
>>>>>>> 6fa4ed1690d5882962af0942523a036d255d7743
