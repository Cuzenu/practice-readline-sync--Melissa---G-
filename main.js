
// This is a simple quiz program that tests the user's knowledge on basic programming concepts.
// It uses the readline-sync module to read user input from the console and provides feedback based on the user's answers.
// Importing the readline-sync module to read user input from the console
const readline  = require('readline-sync'); // Importing the readline-sync module to read user input from the console

let userName = readline.question("What is your name? "); // Using readline-sync to read user input from the console and store it in the variable 'info'
console.log("Hello, " + userName + "! It's time for a quiz!"); // Output: Hello, [user's name]!
console.log(); // Adding a blank line for better readability in the console output

// Question 1: What is the act of assigning a value to a variable for the first time called?
const input = require('readline-sync');
 let answerOne = readline.question("Question 1: What is the act of assigning a value to a variable for the first time called? ");
 console.log("You entered: " + answerOne); // Output: the user's answer to the first question

 if (answerOne.toLowerCase() === "initialization") { // Checking if the user's answer is correct (case insensitive)
     console.log("Correct!"); // Output: Correct!
 }
 else { // If the user's answer is incorrect
     console.log("Incorrect! The correct answer is: initialization."); // Output: Incorrect! The correct answer is initialization.
 }

// Question 2: Is this a valid variable name?
console.log(); // Adding a blank line for better readability in the console output
console.log("Code: let $value "); // Adding a blank line for better readability in the console output
let answerTwo = readline.question("Question 2: See the code above, is this a valid variable name?  Enter yes or no. ");
console.log("You entered: " + answerTwo); // Output: the user's answer to the first question

if (answerTwo.toLowerCase() === "yes") { // Checking if the user's answer is correct (case insensitive)
    console.log("Correct!"); // Output: Correct!
}
else { // If the user's answer is incorrect
    console.log("Incorrect! The correct answer is: yes."); // Output: Incorrect! The correct answer is initialization.
}

// Question 3: What type of value is n?
console.log(); // Adding a blank line for better readability in the console output
console.log("Read the code below."); // Output: Read the code below. This is to provide context for the next question
console.log("Let n = 12;"); // Output: Let n = 12; This is to provide context for the next question

let answerThree = readline.question("Question 3: What type of value is n? "
); // Asking the user for the type of value for n (assuming n is a variable in context)");
console.log("You entered: " + answerThree); // Output: the user's answer to the first question

if (answerThree.toLowerCase() === "number") { // Checking if the user's answer is correct (case insensitive)
    console.log("Correct!"); // Output: Correct!
}
else { // If the user's answer is incorrect
    console.log("Incorrect! The correct answer is number."); // Output: Incorrect! The correct answer is initialization.
}


// Question 4: True or false? Attempting to use a keyword for anything other than its intended use will result in an error.
console.log(); // Adding a blank line for better readability in the console output
let answerFour = readline.question("Question 4: True or false? Attempting to use a keyword for anything other than its intended use will result in an error. "); // Asking the user for their answer to the true/false question");
console.log("You entered: " + answerFour); // Output: the user's answer to the first question

if (answerFour.toLowerCase() === "true") { // Checking if the user's answer is correct (case insensitive)
    console.log("Correct!"); // Output: Correct!
}
else { // If the user's answer is incorrect
    console.log("Incorrect! The correct answer is: true."); // Output: Incorrect! The correct answer is initialization.
}

// Question 5: What is the output of the following code?  console.log("10" - 2);
console.log(); // Adding a blank line for better readability in the console output
console.log("console.log(\"10\" - 2);"); // Output: console.log("10" - 2); This is to provide context for the next question

let answerFive = readline.question("Question 5: What is the output of the code above? "); // Asking the user for the output of the code above);
console.log("You entered " + answerFive); // Output: the user's answer to the first question

if (answerFive == 8) { // Checking if the user's answer is correct
    console.log("Correct!") // Output: Correct!
} else { // If the user's answer is incorrect
    console.log("Incorrect! The correct answer is: 8."); // Output: Incorrect! The correct answer is initialization.
}

// Indicate the quiz is done
console.log(); // Adding a blank line for better readability in the console output
console.log("The quiz is now over!"); // Output: The quiz is now over!


