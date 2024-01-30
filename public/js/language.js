item = document.querySelector(".item-ul").querySelectorAll("a");
console.log(item)
item.forEach(element => {element.addEventListener("click" , () =>{
        item.forEach(list => list.classList.remove(".active"))
        this.classList.add(".active")
    })
})

