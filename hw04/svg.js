var pic = document.getElementById('vimage');

var pic=document.getElementById("vimage");
var change=function(e) {
    e.preventDefault();
    this.setAttribute('fill','green');
};

var intervalID;

var animate=function(x,y) {
    var c=document.createElementNS("http://www.w3.org/2000/svg","circle");
    var grow=true;
    var rad=0;
    window.clearInterval(intervalID);
    
    var drawCircle=function() {
	c.setAttribute("cx",250);
	c.setAttribute("cy",250);
	c.setAttribute("r",rad);
	c.setAttribute("fill","red");
	c.setAttribute("stroke","black");
	pic.appendChild(c);
	rad=parseInt(c.getAttribute("r"),10);
	
	if (rad==250) {
	    console.log('stop');
	    grow=false;
	} else if (rad==0) {
	    console.log('start');
	    grow=true;
	}

	if (grow) {
	    rad++;
	} else {
	    rad--;
	}
	c.setAttribute('r', rad.toString());
    };
    intervalID=window.setInterval(drawCircle, 10);
   
};

var stop = function(e) {
    e.preventDefault();
    window.clearInterval(intervalID);
};

/*var clicked=function(e){
    if (e.toElement == this) {
	drawCircle(e.offsetX, e.offsetY);
    }
};*/

//pic.addEventListener('click', clicked);
document.getElementById("start").addEventListener('click', animate);
document.getElementById("stop").addEventListener('click', stop);
