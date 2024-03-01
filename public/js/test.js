// Slider start here
function chalu(){
    document.getElementById('slidebar').classList.toggle('active');
}

// themes.textContent = localStorage.getItem("theme") || "light"
// let theme = localStorage.getItem("theme")
// if(theme === "light"){
//     mode.src = moonmode;
// }
// else if(theme === "dark"){
//     mode.src = sunmode;
// }

// function themetoggle(){
//     let element = document.body;
//     mode.src = "../icons/sun.png";
//     element.classList.toggle("dark");
//     let theme = localStorage.getItem("theme");
//     document.cookie = `theme = ${theme}`
//     if(theme && theme === "dark"){
//         localStorage.setItem("theme" , "light");
//         element.classList.add("light");
//         element.classList.remove("dark");
//         console.log("it's a light theme");
//         mode.src = moonmode;
//     }
//     else{
//         localStorage.setItem("theme" , "dark")
//         console.log("it's a dark theme");
//         element.classList.add("dark");
//         element.classList.remove("light");
//         mode.src = sunmode;
//     }
//     document.getElementById("theme").textContent = localStorage.getItem("theme");
// }