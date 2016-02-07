// PUPILS
// - Add pupil
// - View pupils
// - Edit pupils


var people = [
	{
		name: 'Hector Romo',
		email: 'hector@frimod.com',
		attended_classes: [ false, false, false, false, false ]
	},
	{
		name: 'Emanuel Munoz',
		email: 'emanuel@frimod.com',
		attended_classes: [ false, false, false, false, false ]
	},
	{
		name: 'Diego Riano',
		email: 'diego@frimod.com',
		attended_classes: [ false, false, false, false, false ]
	}
];


var list = new Vue({

	el: '#app',

	data: {
		pupils: people,
		newPupil: {
			name: '',
			email: ''
		}
	},

	methods: {
		addPupil: function() {
			var newPupil = {
				name: this.newPupil.name,
				email: this.newPupil.email,
				attended_classes: [ false, false, false, false, false ]
			};

			this.pupils.push(newPupil);
			this.newPupil.name = '';
			this.newPupil.email = '';
		},

		removePupil: function(pupil) {
			this.pupils.$remove(pupil);
		}
	}

});