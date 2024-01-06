let upper = document.getElementById('btn1');
let lower = document.getElementById('btn2');
let remove = document.getElementById('btn3');
let clear = document.getElementById('btn4');
let copy = document.getElementById('btn5');
let text = document.getElementById('text')

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
    let copytext = navigator.clipboard.readText(text.value);
    text = copytext;
}
remove.onclick = function(){
    let newText = text.value.split(/[ ]+/);
    text.value = newText.join(" ");    
}