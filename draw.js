let canvas = document.getElementById('canvas');
let context = canvas.getContext("2d");

let screenSize = new Pair(0,0);

window.addEventListener ("resize", resize);
function resize (){
	//console.log("ASDF");
	screenSize.x = window.innerWidth;
	screenSize.y = window.innerHeight;
	canvas.width = screenSize.x;
	canvas.height = screenSize.y;
}

function draw() {
	//console.log("test");
	context.clearRect(0, 0, canvas.width, canvas.height);
	
	context.fillStyle = "yellow";
	context.fillRect(0, 0, screenSize.x, screenSize.y);
	
	context.fillStyle = "pink";
	for(let i = 0; i < platformNumber; i++) {
		context.fillRect(platform[i].move.pos.x, platform[i].move.pos.y, platform[i].move.size.x, platform[i].move.size.y);
	}

	context.fillStyle = "red";
	context.fillRect(player.move.pos.x, player.move.pos.y, player.move.size.x, player.move.size.y);

	context.fillStyle = "green";
	context.fillRect(bear.move.pos.x, bear.move.pos.y, bear.move.size.x, bear.move.size.y);
	window.requestAnimationFrame(draw);
}
