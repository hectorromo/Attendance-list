// PUPILS
// - Add pupil
// - View pupils
// - Edit pupils


var people = [
	{
		name: 'Hector Romo',
		mail: 'hector@frimod.com',
		attended_classes: [ false, false, false, false, false ]
	},
	{
		name: 'Emanuel Munoz',
		mail: 'emanuel@frimod.com',
		attended_classes: [ false, false, false, false, false ]
	},
	{
		name: 'Diego Riano',
		mail: 'diego@frimod.com',
		attended_classes: [ false, false, false, false, false ]
	}
];


var list = new Vue({

	el: '#app',

	data: {
		pupils: people,
		newPupil: {
			name: '',
			mail: ''
		}
	},

	methods: {
		addPupil: function() {
			var newPupil = {
				name: this.newPupil.name,
				mail: this.newPupil.mail,
				attended_classes: [ false, false, false, false, false ]
			};

			this.pupils.push(newPupil);

			this.newPupil.name = '';
			this.newPupil.mail = '';
		},

		removePupil: function(pupil) {
			this.pupils.$remove(pupil);
		}
	}

});