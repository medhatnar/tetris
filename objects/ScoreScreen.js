function ScoreScreen() {
	var scores;
	var highScores;
	var scoresToDisplay;
	var yourRank;
	var rankings = [];
	var headerText = 'YOUR RANKING';
	var yCor = -100;
	var xCor = gameArea.size + 10;
	var headerInterval;
	var dataCalled = false;
	var haveNotDisplayedHighScores = true;

	this.display = async function() {
		if (dataCalled === false) {
			dataCalled = true;
			scores = await readScores();
			scoresToDisplay = await rank();
			highScores = scores.slice(0, 11);
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

			for (let i = 0; i < scoresToDisplay.length; i++) {
				if (xCor === 150 && haveNotDisplayedHighScores) {
					haveNotDisplayedHighScores = false;
					setTimeout(() => {
						scoresToDisplay = highScores;
						rankings = [...Array(11).keys(), 11];
						rankings.shift();
						xCor = gameArea.size + 10;
						yCorOffset = 200;
						headerText = 'QT HIGH SCORES';
					}, 7500);
				}
				textSize(50);
				text(scoresToDisplay[i].initials, xCor, yCor + yCorOffset);
				text(scoresToDisplay[i].score, xCor + 260, yCor + yCorOffset);
				text(rankings[i], xCor + 600, yCor + yCorOffset);
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

	function rank() {
		var countDownForLowLevels;
		for (var i = 0; i < scores.length; i++) {
			if (scores[i].initials === initials.toUpperCase()) {
				yourRank = i + 1;
				if (i < 5) {
					rankings = [...Array(11).keys(), 11];
					rankings.shift();
					return scores.slice(0, 11);
				} else if (i > scores.length - 5) {
					rankings.push(
						scores.length - 11,
						scores.length - 10,
						scores.length - 9,
						scores.length - 8,
						scores.length - 7,
						scores.length - 6,
						scores.length - 5,
						scores.length - 4,
						scores.length - 3,
						scores.length - 2,
						scores.length - 1,
						scores.length
					);
					return scores.slice(scores.length - 11, scores.length);
				} else {
					rankings.push(
						yourRank - 5,
						yourRank - 4,
						yourRank - 3,
						yourRank - 2,
						yourRank - 1,
						yourRank,
						yourRank - 2,
						yourRank + 2,
						yourRank + 3,
						yourRank + 4,
						yourRank + 5
					);
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
