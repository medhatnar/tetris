let initials = '';
let initialsInput;
let score;
let instruction = "PLEASE ENTER A NAME";

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
        
        initialsInput.value('');
}

function InputField() {
	this.setup = function() {
		initialsInput = createInput('');
        initialsInput.input(setInitials);
        initialsInput.attribute('maxlength', 4);
        initialsInput.style('font-size', '80px');
        initialsInput.style('font-family', font0);
        initialsInput.style('color', purple);
        initialsInput.style('text-align', 'center');
        initialsInput.style('text-transform', 'uppercase');
        initialsInput.style('border', `20px ridge  ${lightBlue}`);
	};

	this.display = function() {
        textAlign(CENTER);
        textSize(150);
        textFont(font0);
        stroke(hotPink);
        strokeWeight(10);
        fill(white);
        text(instruction, 200, 200);

        initialsInput.position(500, 300);
        initialsInput.size(500,100);
		if (key === 'Enter') {
            instruction = 'THANK YOU FOR PLAYING!';
            removeElements();
			sendScore();
            setTimeout(() => {
                mode.main = 'score screen';
            }, 1000)
		}
	};
}
