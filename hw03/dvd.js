var c = document.getElementById("slate");
var ctx = c.getContext("2d");
ctx.fillStyle = "#000000";
var requestID;

var x = 100;
var y = 250;
var xVel = 2;
var yVel = 2;

var bounceDVD = function(){
	ctx.clearRect(0, 0, 500, 500);
	ctx.fillRect(x, y, 100, 50);
	
	if(x == c.width - 100 || x == 0){
		xVel *= -1;
	}
	if(y == c.height - 50 || y == 0){
		yVel *= -1;
	}
	x+=xVel;
	y+=yVel;

	requestID = window.requestAnimationFrame(bounceDVD);
};

bounceDVD();