function ScoreScreen() {
	var highScores;
	var headerText = 'YOUR RANKING';
	var yCor = -100;
	var xCor = gameArea.size + 10;
	var headerInterval;
	var rowInterval;
	var nameXPos;
	var scoreXPos;
	var dateXPos;

	this.display = function() {
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
				}
			}, 50);
		}

		stroke(darkBlue);
		fill(yellow);
		textSize(100);
		text('NAME', 150, yCor + 100);
		text('SCORE', 450, yCor + 100);
		text('DATE', 750, yCor + 100);

		if (yCor === 100) {
			var yCorOffset = 200;
			textSize(50);
			text('NAME', xCor, yCor + yCorOffset);
			text('9001', xCor + 260, yCor + yCorOffset);
			text('03/19/20', xCor + 615, yCor + yCorOffset);
			if (!rowInterval) {
				rowInterval = setInterval(() => {
					if (xCor === 150) {
						yCorOffset += 100;
						clearInterval(rowInterval);
					};
					xCor -= 10;
				}, 20);
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

	async function readScores() {
		return await db
			.ref('highScores')
			.once('value')
			.then(function(snapshot) {
				var response = snapshot.val();
				highScores = response;
				console.log('high scores', highScores);
				return highScores;
			});
	}
}
