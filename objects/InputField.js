let initialsInput;
let instruction = 'PLEASE ENTER A NAME';
let initials = '';

function InputField() {
	this.setup = function() {
		initialsInput = createInput('');
		initialsInput.input(this.setInitials);
		initialsInput.attribute('maxlength', 4);
		initialsInput.style('font-size', '80px');
		initialsInput.style('font-family', font0);
		initialsInput.style('color', purple);
		initialsInput.style('text-align', 'center');
		initialsInput.style('text-transform', 'uppercase');
		initialsInput.style('border', `20px ridge  ${lightBlue}`);
	};

	this.setInitials = function() {
		initials = this.value();
	};

	this.checkForExistingInitials = function() {
		return db
			.ref(`scores/${initials}`)
			.once('value')
			.then(snapshot => snapshot);
	};

	this.sendScore = function() {
		// VALIDATION CHECK NEEDED NO SPECIAL CHARACTERS ALLOWED
		if (
			initials.length > 0 &&
			initials.match(/^[a-z0-9]+$/i) &&
			checkForExistingInitials === true
		) {
			db.ref(`scores/${initials.toUpperCase()}`)
				.set({
					initials: initials.toUpperCase(),
					score: game.score,
					date: new Date(Date.now()).toUTCString(),
				})
				.then(res => (key = ''));

			initialsInput.value('');
		}
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
		initialsInput.size(500, 100);
		if (key === 'Enter') {
			instruction = 'THANK YOU FOR PLAYING!';
			removeElements();
			this.sendScore();
			setTimeout(() => {
				mode.main = 'score screen';
			}, 1000);
		}
	};
}
