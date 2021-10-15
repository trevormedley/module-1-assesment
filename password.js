const readline = require('readline');

const reader = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

reader.question("Welcome to Password Validator, please enter your password.", function (input) {

	if (input.length <= 10) {
		console.log("Password must be greater than 10 characters.")
	} else if (input.length < 20) {
		console.log("Password must be less than 20 characters?")
	} else if (input.search(/[a-z]/) == -1) {
		console.log("Your password needs a lower case letter")
	} else if (input.search(/[A-Z]/) == -1) {
		console.log("Your password needs an upper case letter")
	} else if (input.search(/[0-9]/) == -1) {
		console.log("Your password needs at least 1 number")
	} else {
        console.log("Success!")
    }

	reader.close()

});