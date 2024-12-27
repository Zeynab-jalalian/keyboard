window.addEventListener('keydown',(k)=>{
 document.getElementById('res').innerHTML=' The key you entered '+" = "+k.key+"<br>"+' its ASCII code '+' = '+k.keyCode;
})