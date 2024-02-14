let mode = document.querySelector(".mode")
let root = document.documentElement;
console.log(root.style.setProperty);
console.log(mode.src);
let toggle = true;
mode.addEventListener("click" , () => {
    toggle = !toggle;
    if(toggle){
        mode.src = "/icons/moon.png";
        root.style.setProperty("--light" , "#ADEFD1FF")
        root.style.setProperty("--dark" , "#00203FFF")
        root.style.setProperty("--backphoto" , `url("/img/wal1.jpg")`)
    }
    else{
        mode.src = "/icons/sun.png";
        root.style.setProperty("--light" , "rgb(126, 116, 116)")
        root.style.setProperty("--dark" , "rgb(37, 35, 35)")
        root.style.setProperty("--backphoto" , "#FFFFFF")
    }
})