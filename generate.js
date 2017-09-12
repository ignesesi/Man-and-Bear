function start() {
	player = new PlayerBear(new Move(
		new Pair(0, 10), //pos
		new Pair(30, 50), //size
		new Pair(0, 1), //dir
		new Pair(0.5, 0.5), //acc
		new Pair(0, 5), //speed
		new Pair(20, 20) //maxSpeed
	), 10, //live
		10, //maxLive
		0); //score

	bear = new PlayerBear(new Move(
		new Pair(100, 10), //pos
		new Pair(40, 70), //size
		new Pair(0, 0), //dir
		new Pair(0.5, 0.5), //acc
		new Pair(0, 0), //speed
		new Pair(10, 10) //maxSpeed
	), 10, //live
		10, //maxLive
		0); //score

	platformNumber = 20;

	for(let i = 0; i < platformNumber; i++) {
		platform[i] = new Platform(new Move(
			new Pair(0, 0), //pos
			new Pair(100, 20), //size
			new Pair(0, 0), //dir
			new Pair(0.5, 0.5), //acc
			new Pair(1, 1), //speed
			new Pair(10, 10) //maxSpeed
		), 10, //live
			10, //maxLive
			0); //score
		platform[i].move.pos.x = Math.floor(Math.random() * (screenSize.x - platform[i].move.size.x));
		platform[i].move.pos.y = Math.floor(Math.random() * (screenSize.y - platform[i].move.size.y));
		console.log(i, ": ", platform[i].move.pos.x, " ", platform[i].move.pos.y, " ", platform[i].move.size.x, " ", platform[i].move.size.y, "#", screenSize.x, screenSize.y);
	}
}

