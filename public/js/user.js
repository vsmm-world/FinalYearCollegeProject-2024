const star1 = document.querySelectorAll(".emj")[0]
const star2 = document.querySelectorAll(".emj")[1]
const star3 = document.querySelectorAll(".emj")[2]
const star4 = document.querySelectorAll(".emj")[3]
const star5 = document.querySelectorAll(".emj")[4]
const emoji = document.querySelectorAll(".emojis")


star1.addEventListener("click" , () => {
    star1.firstElementChild.srcset = "https://fonts.gstatic.com/s/e/notoemoji/latest/1f62d/512.webp";
    star2.firstElementChild.srcset = ""
    star3.firstElementChild.srcset = ""
    star4.firstElementChild.srcset = ""
    star5.firstElementChild.srcset = ""
})
star2.addEventListener("click" , () => {
    star1.firstElementChild.srcset = "";
    star2.firstElementChild.srcset = "https://fonts.gstatic.com/s/e/notoemoji/latest/1f61f/512.webp";
    star3.firstElementChild.srcset = ""
    star4.firstElementChild.srcset = ""
    star5.firstElementChild.srcset = ""
})
star3.addEventListener("click" , () => {
    star1.firstElementChild.srcset = "";
    star2.firstElementChild.srcset = "";
    star3.firstElementChild.srcset = "https://fonts.gstatic.com/s/e/notoemoji/latest/1f60a/512.webp";
    star4.firstElementChild.srcset = ""
    star5.firstElementChild.srcset = ""

})
star4.addEventListener("click" , () => {

    star1.firstElementChild.srcset = "";
    star2.firstElementChild.srcset = "";
    star3.firstElementChild.srcset = ""
    star4.firstElementChild.srcset = "https://fonts.gstatic.com/s/e/notoemoji/latest/1f604/512.webp";
    star5.firstElementChild.srcset = ""
})
star5.addEventListener("click" , () => {

    star1.firstElementChild.srcset = "";
    star2.firstElementChild.srcset = "";
    star3.firstElementChild.srcset = ""
    star4.firstElementChild.srcset = ""
    star5.firstElementChild.srcset = "https://fonts.gstatic.com/s/e/notoemoji/latest/1f970/512.webp";
})
