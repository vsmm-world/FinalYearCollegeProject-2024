let upper = document.getElementById('btn1');
let lower = document.getElementById('btn2');
let remove = document.getElementById('btn3');
let clear = document.getElementById('btn4');
let copy = document.getElementById('btn5');
let text = document.getElementById('text');
let capitalize = document.getElementById('btn6');

capitalize.onclick = function(){
    let capital = text.value.toLowerCase().split(" ").map((item)=> 
    item.charAt(0).toUpperCase() + item.slice(1)).join(" ");
    console.log(capital);
    text.value = capital;
}
upper.onclick = function() {
    let uppperString = text.value.toUpperCase();
    text.value = uppperString;
}
lower.onclick = function(){
    let lowercase = text.value.toLowerCase()
    text.value = lowercase;
}
clear.onclick= function(){
    let clr = text.innerText = "";
    text.value = clr;
}
copy.onclick = function(){
    navigator.clipboard.writeText(text.value);
}
remove.onclick = function(){
    let newText = text.value.split(/[ ]+/);
    text.value = newText.join(" ");    
}

// Slider start here

