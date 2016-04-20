var c = document.getElementById("Canvas");
var ctx = c.getContext("2d");
ctx.strokeRect(0,0,500,500);

var cbutton = document.getElementById("circle");
var radius = 1;

ctx.fillStyle = "#ff0000";
var add = true;
var drawC = function(e){
    if(radius == c.width/2 || radius == 0){
	add = !add;
    }
    if(add){
	radius = radius + 1;
    }
    if(!add){
	radius = radius - 1;
    }
    ctx.clearRect(0, 0, c.width, c.height);
    ctx.strokeRect(0,0,c.width,c.height);
    ctx.beginPath();
    ctx.arc(c.width/2, c.height/2, radius, 0, 2*Math.PI);
    ctx.fill();
    window.requestAnimationFrame(drawC);
};

cbutton.addEventListener("click",drawC);
