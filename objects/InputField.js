let initials;
let initialsInput;
let score;

function setInitials() {
	initials = this.value().toUpperCase();
}

function sendScore() {
	db.ref('highScores/' + initials)
		.set({
			initials: initials,
			score: game.score, // need to pass score in. Game.score ?
			date: new Date(Date.now()).toUTCString(),
		})
		.then(res => (key = ''));
}

function InputField() {
	this.setup = function() {
		initialsInput = createInput('');
        initialsInput.input(setInitials);
		
	};

	this.display = function() {
        initialsInput.position(200, 265);
		if (key === 'Enter') {
			sendScore();
		}

		textAlign(CENTER);
		textSize(50);
	};
}
