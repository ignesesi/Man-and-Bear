class Pair {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
}

class Move {
	constructor(pos, size, dir, speed) {
		this.pos = pos;
		this.size = size;
		this.dir = dir;
		this.speed = speed;
	}
}

class Platform {
	constructor(move, state) {
		this.move = move;
		this.state = state;
	}
}

class PlayerBear { //player bear
	constructor(move, live, score) {
		this.move = move;
		this.live = live;
		this.score = score;
	}
}

class Effect {
	constructor(live, speed, score) {
		this.live = live;
		this.speed = speed;
		this.score = score;
	}
}

class SalamHoney { //honey, salam
	constructor(move, state, effect) {
		this.move = move;
		this.state = state;
		this.effect = effect;
	}
}
