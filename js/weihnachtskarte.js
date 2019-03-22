// https://gist.github.com/CodeMyUI/105732255c42d15d690cea35e9433b56


var canvas = document.querySelector('canvas');
		canvas.width = 840;
		canvas.height = 840;
var context = canvas.getContext('2d');
var currentFrame = 0;
var circles = [];
var circleCount = 10;



// ---------
// LIFECYCLE
// ---------

function update() {

	// ------------
	// Update state
	// ------------

	currentFrame++;

	_projection.refZ = 400;
	_projection.fLength = 102;

	for(var i = 0; i < circles.length; i++) {
		_projection.doProjection(circles[i].shape);
		_projection.rotateY(circles[i].shape, circles[i].rotationX);
		_projection.rotateX(circles[i].shape, circles[i].rotationY);
	}



	// ------
	// Render
	// ------

	render();
}




// ------
// Render
// ------

function render() {

	// -----
	// Clear
	// -----

	context.clearRect(0, 0, canvas.width, canvas.height);



	// -----------------
	// Background circle
	// -----------------

	context.beginPath();
	context.fillStyle = 'rgba(255,255,255, 0.3)';
	context.shadowBlur = 50;
	context.shadowColor='rgba(255,0,0, 0.4)';
	context.lineWidth = 5;
	context.arc(
		canvas.width/2,
		canvas.height/2,
		260,
		0,
		Math.PI * 2,
		false
	);
	context.fill();



	// ----------------
	// Particle circles
	// ----------------

	for(var i = 0; i < circles.length; i++) {
		circles[i].render();
	}



	// ----
	// Loop
	// ----

	requestAnimationFrame(update);

}



// ---------------
// Start Animation
// ---------------

requestAnimationFrame(update);



// -------------
// 3D Projection
// -------------

var Basic3DProjection = function() {

	this.projCenterX = 0;
	this.projCenterY = 0;
	this.fLength = 400;
	this.refZ = 400;

	this.getScaleFromZ = function(z) {
		if (this.fLength +z == 0) {
			return 0.001;
		} else {
			return this.refZ/(this.fLength+z);
		}
	}

	this.doProjection = function(_object) {

		var x	= _object.posX*this.getScaleFromZ(_object.posZ)+this.projCenterX;
		var y	= _object.posY*this.getScaleFromZ(_object.posZ)+this.projCenterY;
		var y0z0	= this.getScaleFromZ(0);

		_object.screenX = x;
		_object.screenY = y-y0z0;
		_object.scale = this.getScaleFromZ(_object.posZ);
		_object.pastViewPoint = _object.posZ > this.refZ;

	}

	this.rotateY = function(object, ang) {
		var _cos = Math.cos(ang);
		var _sin = Math.sin(ang);

		var tz = object.posZ * _cos - object.posX * _sin;
		var tx = object.posZ * _sin + object.posX * _cos;
		object.posX = tx;
		object.posZ = tz;
		this.doProjection(object);
	}

	this.rotateX = function(object, ang) {
		var _cos = Math.cos(ang);
		var _sin = Math.sin(ang);

		var ty = object.posY * _cos - object.posZ * _sin;
		var tz = object.posY * _sin + object.posZ * _cos;
		object.posY = ty;
		object.posZ = tz;
		this.doProjection(object);
	}

	this.rotateZ = function(object, ang) {
		var _cos = Math.cos(ang);
		var _sin = Math.sin(ang);

		var object = objects[i];
		var tx = object.posX * _cos - object.posY * _sin;
		var ty = object.posX * _sin + object.posY * _cos;
		object.posX = tx;
		object.posY = ty;
		this.doProjection(object);
	}

}

var _projection = new Basic3DProjection();
		_projection.projCenterX	= canvas.width/2;
		_projection.projCenterY	= canvas.height/2;



// --------
// 3D Shape
// --------

var Basic3DObject = function (x, y, z, size) {

	this.posX = x;
	this.posY = y;
	this.posZ = z;
	this.dispSize = size;

	this.screenX = 0;
	this.screenY = 0;

	this.scale = 1;
	this.pastViewPoint = false;

}


function createCircle() {
	this.shape = new Basic3DObject(0, 0, 68, 0);
	this.rotationX;
	this.rotationY;
	this.size;

	this.render = function() {
		context.beginPath();
		context.strokeStyle = 'rgba(182,182,182, ' + (this.shape.posZ * -1) / 60 + ')';
		context.fillStyle = 'rgba(182,182,182, ' + (this.shape.posZ * -1) / 60 + ')';
		context.lineWidth = 2 * this.size;
		context.arc(
			this.shape.screenX,
			this.shape.screenY,
			this.size * this.shape.scale,
			0,
			Math.PI * 2,
			false
		);
		if(this.fillOrStroke === 'fill') {
			context.fill();
		} else {
			context.stroke();
		}
	}
}

for(var i = 0; i < circleCount; i++) {
	var tempCircle = new createCircle();

	if(Math.random() < 0.5) {
		tempCircle.rotationX = Math.random() / 100;
	} else {
		tempCircle.rotationX = (Math.random() / 100) * -1;
	}

	if(Math.random() < 0.5) {
		tempCircle.fillOrStroke = 'fill';
	} else {
		tempCircle.fillOrStroke = 'stroke';
	}

	if(Math.random() < 0.5) {
		tempCircle.rotationY = Math.random() / 100;
	} else {
		tempCircle.rotationY = Math.random() / 100 * -1;
	}

	tempCircle.size = Math.random() * 2;

	circles.push(tempCircle);
}
			
			
		function load_home() {

				document.getElementById("content").innerHTML=
		'<audio id="myAudio"><source src="audio/04 Jingle Bells.m4a" type="audio/mp4" volume="1.0"></audio>'+
		'<svg style="border:3px solid black"><text x="10" y="80" style="font-size:70px;font-style:italic;stroke:darkgrey;fill:darkgreen"rotate="-10,20,5">Schöne Weihnachten</text>'+
		'<polygon fill="gold" points="350 75, 379 161, 469 161, 397 215, 423 301, 350 250, 277 301, 303 215, 231 161, 321 161" transform="scale(.2) translate(30,345)"/>'+
		'<text x="10" y="190" style="font-size:70px;font-style:italic;stroke:black;fill:darkgray">liebe Aurelie & Aaron'+
		'<animate attributeName="fill" values="red;green;blue;#BF3041" begin="10" dur="6" repeatCount="15" fill="freeze" /></text>'+
		'<rect x="0" y="200" width="800" height="400"/>'+
		'<defs><radialGradient id="radial"><stop offset="0%" stop-color="white" /><stop offset="100%" stop-color="gray" /></radialGradient></defs>'+
		'<circle cx="320" cy="400" r="130" fill="url(#radial)"><animateTransform attributeName="transform" type="scale" begin="0" dur="10" from="0.5" to="1"/></circle>'+
		'<image x="200" y="270" width="250" height="250" xlink:href="img/schlitten.png">'+
		'<animateTransform attributeName="transform" type="rotate" begin="0" dur="10" from="0, 200,500" to="-360, 200,500"/>'+
		'<animateTransform id="anim1" attributeName="transform" type="translate" begin="14;36;58;80" dur="2" from="0" to="420"/>'+
		'<animateTransform id="anim2" attributeName="transform" type="translate" begin="16;38;60;82" dur="4" repeatCount="3" from="-420" to="420"/>'+
		'<animateTransform id="anim3" attributeName="transform" type="translate" begin="28;50;72;94" dur="2" from="-420" to="0"/></image>'+
		'<text x="150" y="640" style="font-size:36px;font-style:italic;stroke:black;fill:gold">Grüße aus Deutschland ♥</text></svg>';

				document.getElementById("myAudio").play();
			}

		 
		
	