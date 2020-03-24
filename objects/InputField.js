let initialsInput;
let instruction = 'PLEASE ENTER A NAME';
let initials = '';
let textSizeUnit = 150;

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
			.ref('scores')
			.child(initials.toUpperCase())
			.once('value')
			.then(snapshot => snapshot.exists());
	};

	this.sendScore = async function() {
		let initialsTaken = await this.checkForExistingInitials();

		if (initials.length > 0 && initials.match(/^[a-z0-9]+$/i)) {
			console.log(initials, initialsTaken);
			if (initialsTaken === false) {
				db.ref(`scores/${initials.toUpperCase()}`)
					.set({
						initials: initials.toUpperCase(),
						score: game.score,
						date: new Date(Date.now()).toUTCString(),
					})
					.then(res => { 
						textSizeUnit = 150;
						instruction = 'THANK YOU FOR PLAYING!';
						removeElements();
						setTimeout(() => {
							key = '';
							mode.main = 'score screen';
						}, 1500);
					});
			} else {
				textSizeUnit = 50;
				instruction =
					'This name has already been taken, please select another!';
			}
			initialsInput.value('');
		} else {
			textSizeUnit = 50;
			instruction = 'PLEASE ENTER ALPHA-NUMERIC CHARACTERS ONLY.';
		}
	};

	this.display = function() {
		textAlign(CENTER);
		textSize(textSizeUnit);
		textFont(font0);
		stroke(hotPink);
		strokeWeight(10);
		fill(white);
		text(instruction, 200, 200);

		initialsInput.position(500, 300);
		initialsInput.size(500, 100);
		if (key === 'Enter') {
			key = '';
			this.sendScore();
		}
	};
}
