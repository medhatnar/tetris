function ScoreScreen() {
	var scores;
	var yourRankScores;
	var highScores;
	var startScores;
	var headerText = 'YOUR RANKING';
	var yCor = -100;
	var xCor = gameArea.size + 10;
	var headerInterval;;
	var dataCalled = false;

	this.display = async function() {
		if (dataCalled === false) {
			scores = await readScores();
			console.log("Getting high scores", scores);
			dataCalled = true;
		};
		textAlign(CENTER);
		stroke(yellow);
		fill(0, 0, 0);
		textSize(150);
		text(headerText, 450, yCor);

		if (!headerInterval) {
			headerInterval = setInterval(() => {
				yCor += 10;
				if (yCor === 100) {
					clearInterval(headerInterval);
				};
			}, 50);
		};

		stroke(darkBlue);
		fill(yellow);
		textSize(100);
		text('NAME', 150, yCor + 100);
		text('SCORE', 450, yCor + 100);
		text('RANK', 750, yCor + 100);

		if (yCor === 100) {
			textSize(50);
			var yCorOffset = 200;
			if (frameCount % 2 === 0 && xCor !== 150) xCor -= 10;
			
			if(xCor === 150 && frameCount === 600) {
				xCor = gameArea.size + 10;
				yCorOffset = 200;
				headerText = "QT HIGH SCORES";
			}

			for (let i = 0; i < 12; i++) {
				text('NAME', xCor, yCor + yCorOffset);
				text('9001', xCor + 260, yCor + yCorOffset);
				text('5th', xCor + 615, yCor + yCorOffset);
				yCorOffset += 50;
			}

			fill(0, 0, 0);
			strokeWeight(0);
			rect(
				gameArea.size,
				0,
				window.innerWidth - gameArea.size,
				gameArea.size + 1
			);
		}
	};

	function readScores() {
		return db
			.ref('scores')
			.once('value')
			.then(snapshot => {
				var response = snapshot.val();
				console.log('response', response);
				return response;
			});
	}
}
