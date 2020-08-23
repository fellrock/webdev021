
var color = ["#222f3e","#f368e0","#ffa500","#0abde3","#10ac84","#222f3e","#5f27cd"];
var i     = 0;

document.getElementById("button1").addEventListener ("click",
function() {
i = i < color.length ? ++i : 0;
document.getElementById("button4").style.background = color[i]        
})             

document.getElementById("button2").addEventListener ("click",
function() {
i = i < color.length ? ++i : 0;
document.querySelector("body").style.background = "#aaa";
document.getElementById("button1").childNodes[0].nodeValue="Change Colour"
})             
    
document.getElementById("button3").addEventListener ("click",
function() {
i = i < color.length ? ++i : 0;
document.querySelector("body").style.background = color[i]
document.getElementById("button1").childNodes[0].nodeValue="Muda Cor"        
})              
    
document.getElementById("button4").addEventListener ("click",
function() {
i = i < color.length ? ++i : 0;
document.getElementById("button1").childNodes[0].nodeValue="ERROR"
document.getElementById("button2").childNodes[0].nodeValue="ERROR"
document.getElementById("button3").childNodes[0].nodeValue="ERROR"  
document.getElementById("button4").childNodes[0].nodeValue="ERROR"
document.querySelector("body").style.background = "#550000"
}) 