let mode = document.querySelector(".mode")

let toggle = true;
document.body.classList.toggle("dark")
const modechange = function (event){
    event.preventDefault()
    toggle = !toggle;
    if(toggle){
        mode.src = "/icons/sun.png";
        document.body.classList.add("dark")
        document.body.classList.remove("light")
    }
    else{
        mode.src = "/icons/moon.png";
        document.body.classList.add("light")
        document.body.classList.remove("dark")
    }
}
mode.addEventListener("click" , modechange)

