let canvas = document.getElementById('canvas');
let context = canvas.getContext("2d");

let screenSize = new Pair(0,0);
window.addEventListener ("resize", function ()
{
	screenSize.x = window.innerWidth;
	screenSize.y = window.innerHeight;
	canvas.width = screenSizeX;
	canvas.height = screenSizeY;
}, true);

function main() {
	setTimeout(main, 30);
}

function draw() {
	context.clearRect(0, 0, canvas.width, canvas.height);

	context.fillStyle = "blue";
	context.fillRect(player.pos.x, player.pos.y, player.size.x, player.size.y);

	context.globalAlpha = 0.5;
	context.fillRect(10, 10, ratio * 200, 20);
	context.globalAlpha = 1;
	context.strokeRect(10, 10, 200, 20);

	window.requestAnimationFrame(draw);
}
