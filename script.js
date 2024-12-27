window.addEventListener('keydown',(k)=>{
 document.getElementById('res').innerHTML=' The key you entered '+" = "+k.key+"<br>"+' its ASCII code '+' = '+k.keyCode;
})


/* second way 
window.addEventListener('keydown',ac);
function ac(k){
 document.getElementById('res').innerHTML=' The key you entered '+" = "+k.key+"<br>"+' its ASCII code '+' = '+k.keyCode;
} */