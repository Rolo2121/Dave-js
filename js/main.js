// let customerIsBanned = false;
// let soup = 'children soup';
// let crakers = true;
// let reply;
// if (customerIsBanned) {
// 	reply = 'No kids for you!';
// } else if (soup && crakers) {
// 	reply = `Here's your order of ${soup} & crakers!`;
// } else if (soup) {
// 	reply = `Here's your order of ${soup}`;
// } else {
// 	reply = `We out of kids to eat!`;
// }
// console.log(reply);

// let testScore = 69;
// let collegeStudent = true;
// let grade;

// if (testScore >= 90) {
// 	grade = 'A';
// } else if (testScore >= 80) {
// 	grade = 'B';
// } else if (testScore >= 70) {
// 	grade = 'C';
// } else if (testScore >= 69) {
// 	grade = 'Noice!!!';
// } else {
// 	if (collegeStudent) {
// 		grade = '69 Dudes!!!';
// 	}
// }
// console.log(grade);

// if (playerOne === computer) {
// 	// tie
// } else if (playerOne === 'rock') {
// 	if (computer === 'paper') {
// 		// computer wins
// 	} else {
// 		// player one wins
// 	}
// } else if (playerOne === 'paper') {
// 	if (computer === 'scissors') {
// 		// computer wins
// 	} else {
// 		// player one wins
// 	}
// } else {
// 	if (computer === 'rock') {
// 		// computer wins
// 	} else {
// 		// player one wins
// 	}
// }

// let playerOne = 'rock';
// let computer = 'scissors';

// switch (playerOne) {
// 	case computer:
// 		console.log('Tie Game!');
// 		break;
// 	case 'rock':
// 		if (computer === 'paper') {
// 			console.log('computer wins!');
// 		} else {
// 			console.log('playerOne wins!');
// 		}
// 		break;
// 	case 'paper':
// 		if (computer === 'scissors') {
// 			console.log('computer wins!');
// 		} else {
// 			console.log('playerOne wins!');
// 		}
// 		break;
// 	case 'scissors':
// 		if (computer === 'rock') {
// 			console.log('computer wins!');
// 		} else {
// 			console.log('playerOne wins!');
// 		}
// 		break;
// }

// let soup = 'children soup';
// let isCustomerBanned = false;
// let soupAccess = isCustomerBanned
// 	? 'Sorry, no children for yous!'
// 	: soup
// 	? `Yes, we have ${soup} today.`
// 	: 'Sorry, no children for yous!';
// console.log(soupAccess);

// let testScore = 15;
// let myGrade =
// 	testScore > 89
// 		? 'A'
// 		: testScore > 79
// 		? 'B'
// 		: testScore > 69
// 		? 'C'
// 		: testScore > 59
// 		? 'Noice!!!'
// 		: 'Fucked!!';
// console.log(`My test grade is ${myGrade}!`);

// alert('Hello Jackass!');
// let name = prompt('Please enter your name.');
// if (name) {
// 	console.log(name);
// } else {
// 	console.log('Please enter your name jackass!');
// }

// let playGame = confirm('Wanna play a game?');
// if (playGame) {
// 	let playerChoice = prompt('Please enter rock, paper, or scissors');
// 	if (playerChoice) {
// 		let playerOne = playerChoice.trim().toLowerCase();
// 		if (
// 			playerOne === 'rock' ||
// 			playerOne === 'paper' ||
// 			playerOne === 'scissors'
// 		) {
// 			let computerChoice = Math.floor(Math.random() * 3 + 1);
// 			let computer =
// 				computerChoice === 1
// 					? 'rock'
// 					: computerChoice === 2
// 					? 'paper'
// 					: 'scissors';

// 			let result =
// 				playerOne === computer
// 					? 'Tie'
// 					: playerOne === 'rock' && computer === 'paper'
// 					? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
// 					: playerOne === 'paper' && computer === 'scissors'
// 					? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
// 					: playerOne === 'scissors' && computer === 'rock'
// 					? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
// 					: `playerOne: ${playerOne}\nComputer: ${computer}\nplayerOne wins!`;
// 			alert(result);
// 			let playAgain = confirm('Play Again');
// 			playAgain ? location.reload() : alert('Thought so Bitch!');
// 		} else {
// 			alert('Pick rock, paper, or scissors idiot!');
// 		}
// 	} else {
// 		alert('You Dickhead!!');
// 	}
// } else {
// 	alert('What a Bitch!!');
// }

// LOOPS
// while loop

// let myNumber = 0;
// while (myNumber < 50) {
// 	console.log(myNumber);
// 	myNumber++;
// }

// let name = 'Jake';
// let counter = 0;
// let myLetter;
// while (counter <= 3) {
// 	myLetter = name[counter];
// 	console.log(myLetter);
// 	if (counter === 1) {
// 		counter += 2;
// 		continue;
// 	}
// 	if (myLetter === 'k') break;
// 	counter++;
// }
// console.log(counter);

// for loop
// let name = 'Jake';
// for (let i = 0; i <= name.length; i++) {
// 	console.log(name.charAt(i));
// }

// FUNCTIONS

// Methods = Built-in Functions

// Function Declaration Syntax:

// function sum(num1, num2) {
// 	if (num2 === undefined) {
// 		return num1 + num1;
// 	}
// 	return num1 + num2;
// }
// console.log(sum(2 ));

// const getUserNameFromEmail = (email) => {
// 	return email.slice(0, email.indexOf('@'));
// };
// console.log(getUserNameFromEmail('player2@Somerandom.com'));

// const toProperCase = (name) => {
// 	return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
// };

// console.log(toProperCase('jAkE'));
