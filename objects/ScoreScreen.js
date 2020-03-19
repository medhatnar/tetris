var highScores;

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

function ScoreScreen() {
	this.display = function() {
		textAlign(CENTER);
		stroke(yellow);
		fill(0, 0, 0);
		textSize(150);
		text('QT HIGH SCORES', 450, 100);
		stroke(darkBlue);
		fill(yellow);
		textSize(100);
		text('NAME', 150, 200);
		text('SCORE', 450, 200);
		text('DATE', 750, 200);
	};
}
