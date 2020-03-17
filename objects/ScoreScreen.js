function readScores() {
	return db
		.ref('highScores')
		.once('value')
		.then(function(snapshot) {
            var response = snapshot.val();
            console.log(response);
		});
}

function ScoreScreen() {
	this.display = function() {};
}
