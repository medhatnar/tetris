let initials;
let initialsInput;
let score;

function setInitials() {
	initials = this.value();
}

function sendScore() {
	db.ref('highScores/' + initials.toUpperCase())
		.set({
			initials: initials.toUpperCase(),
			score: game.score,
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
        textAlign(CENTER);
        textSize(150);
        textFont(font0);
        stroke(hotPink);
        strokeWeight(10);
        fill(white);
        text("PLEASE ENTER A NAME", 200, 200);

        initialsInput.position(450, 300);
        initialsInput.size(450,200);
		if (key === 'Enter') {
			sendScore();
		}

	};
}

// hotPink,
// 		purple,
// 		darkBlue,
// 		lightBlue,
// 		white,
// 		lightPink,
