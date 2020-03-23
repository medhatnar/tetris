function ScoreScreen() {
	var scores;
	var highScores;
	var yourRankScores;
	var scoresToDisplay;
	var rank;
	var headerText = 'YOUR RANKING';
	var yCor = -100;
	var xCor = gameArea.size + 10;
	var headerInterval;
	var dataCalled = false;

	this.display = async function() {
		if (dataCalled === false) {
			scores = await readScores();
			yourRankScores = await yourRank();
			scoresToDisplay = yourRankScores;
			highScores = scores.slice(0, 11);
			dataCalled = true;
		}
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
		text('RANK', 750, yCor + 100);

		if (yCor === 100 && scores) {
			var yCorOffset = 200;
			if (frameCount % 2 === 0 && xCor !== 150) xCor -= 10;

			if (xCor === 150 && frameCount >= 500) {
				console.log(
					'high: ',
					highScores,
					'your rank: ',
					yourRankScores,
					'all scores: ',
					scores
				);
				
				scoreToDisplay = highScores;
				xCor = gameArea.size + 10;
				yCorOffset = 200;
				headerText = 'QT HIGH SCORES';
			}

			for (let i = 0; i < scoresToDisplay.length; i++) {
				textSize(50);
				text(scoresToDisplay[i].initials, xCor, yCor + yCorOffset);
				text(scoresToDisplay[i].score, xCor + 260, yCor + yCorOffset);
				text(i + 1, xCor + 615, yCor + yCorOffset);
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

	function yourRank() {
		for (var i = 0; i < scores.length; i++) {
			if (scores[i].initials == initials.toUpperCase()) {
				rank = i + 1;
				if (i < 5) {
					return scores.slice(0, 11);
				} else if (i > scores.length - 5) {
					return scores.slice(scores.length - 11, scores.length);
				} else {
					return scores.slice(i - 5, i + 6);
				}
			}
		}
	}

	function readScores() {
		return db
			.ref('scores')
			.once('value')
			.then(snapshot => {
				var response = snapshot.val();
				const scoreArray = Object.keys(response).map(i => response[i]);
				const sortedScores = scoreArray.sort((first, second) => {
					return second.score - first.score;
				});
				return sortedScores;
			});
	}
}
