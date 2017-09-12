
let player, bear, platform = [], plaformNumber;

function abs(a) {
	if (a < 0) {
		return a*(-1);
	}
	return a;
}

function main() {
	player.move.makeMove();
	setTimeout(main, 30);
}

resize();
start();
main();
draw();

