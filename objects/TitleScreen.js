function TitleScreen() {

	const colorChangeInterval = 5;

	var colors = [
		hotPink,
		purple,
		darkBlue,
		lightBlue,
		white,
		lightPink,
		hotPink,
		yellow,
		lightBlue,
	];
	var showEnter = true;

	this.enterButtonDown = function() {
		if (keyIsDown(ENTER)) {
			mode.main = "game";
			gameMusic.play();
			frameRate(60);
		}
	}

	this.blinkingEnter = function() {
		if (showEnter) {
			showEnter = false;
			return '<Enter>';
		} else {
			showEnter = true;
			return '';
		}
	};

	this.display = function() {
		push();
		angleMode(DEGREES);
		textFont(font0);
		textAlign(CENTER, CENTER);
		image(arrows.up, 380, 440);
		image(arrows.left, 180, 535);
		image(arrows.right, 750, 535);
		image(arrows.down, 385, 640);
		textSize(40);
		stroke(0);
		fill(lightPink);
		text('rotate', 515, 455);
		fill(darkBlue);
		text('go left', 300, 545);
		fill(purple);
		text('go right', 660, 545);
		fill(hotPink);
		text('death drop', 520, 650);
		fill(yellow);
		text('press', 350, 750);
		fill(lightBlue);
		textSize(50);
		frameRate(10);
		text(this.blinkingEnter(), 480, 750);
		fill(yellow);
		textSize(40);
		text('to start', 630, 750);
		this.alternateTitleColors(colors)
		pop();
	};

	this.alternateTitleColors = function(colors) {
		push();
		frameRate(5);
		angleMode(DEGREES);
		textFont(font0);
		textSize(350);
		strokeWeight(10);
		stroke(0, 0, 0);
		fill(91, 207, 250);
		textAlign(CENTER, CENTER);
		fill(colors[0]);
		text('Q', 150, 250);
		textSize(80);
		fill(colors[1]);
		text('u ', 280, 300);
		fill(colors[2]);
		text('e ', 330, 300);
		fill(colors[3]);
		text('e ', 380, 300);
		fill(colors[4]);
		text('r ', 430, 300);
		fill(colors[5]);
		textSize(350);
		text('T', 530, 250);
		fill(colors[6]);
		textSize(80);
		fill(colors[7]);
		text('e ', 620, 300);
		fill(colors[8]);
		text('t ', 670, 300);
		fill(colors[0]);
		text('r ', 720, 300);
		fill(colors[1]);
		text('i ', 770, 300);
		fill(colors[2]);
		text('s ', 820, 300);
		pop();
		var lastColor = colors.pop();
		colors.unshift(lastColor);
	};
}

