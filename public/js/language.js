item = document.querySelector(".item-list-part").querySelectorAll("a");
console.log(item);

item.forEach(element => {
    element.addEventListener("click" , function(){
        item.forEach(list => list.classList.remove(".active"))
            this.classList.add(".active")
    })
})