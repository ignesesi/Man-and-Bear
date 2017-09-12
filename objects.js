class Pair {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
}

class Move {
	constructor(pos, size, dir, acc, speed, maxSpeed) {
		this.pos = pos;
		this.size = size;
		this.dir = dir;
		this.acc = acc;
		this.speed = speed;
		this.maxSpeed = maxSpeed;
	}
	makeMove() {
		//console.log(this.pos.x, this.pos.y, this.size.x, this.size.y, screenSize.x, screenSize.y);
		if (this.pos.x < screenSize.x - this.size.x && this.pos.x > 0) {
			this.pos.x += this.dir.x*this.speed.x;
			if(abs(this.speed.x) < this.maxSpeed.x) {
				this.speed.x+=this.acc.x*this.speed.x;
			} else {
				this.speed.x = this.maxSpeed.x;
			}
		} else if(this.pos.x >= screenSize.x - this.size.x) {
			this.pos.x = screenSize.x - this.size.x;
			this.dir.x = 0;
			this.speed.x = 0;
		} else {
			this.pos.x = 0;
			this.dir.x = 0;
			this.speed.x = 0;
		}

		if (this.pos.y < screenSize.y - this.size.y && this.pos.y > 0)	{
			this.pos.y += this.dir.y*this.speed.y;
			if(abs(this.speed.y) < this.maxSpeed.y) {
				this.speed.y+=this.acc.y*this.speed.y;
			} else {
				this.speed.y = this.maxSpeed.y;
			}
		} else if(this.pos.y >= screenSize.y - this.size.y) {
			this.pos.y = screenSize.y - this.size.y;
			this.dir.y = 0;
			this.speed.y = 0;
		} else {
			this.pos.y = 0;
			this.dir.y = 0;
			this.speed.y = 0;
		}

	}
}

class Platform {
	constructor(move, state) {
		this.move = move;
		this.state = state;
	}
}

class PlayerBear { //player bear
	constructor(move, live, maxLive, score) {
		this.move = move;
		this.live = live;
		this.maxLive = maxLive;
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
