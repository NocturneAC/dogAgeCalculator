// Dog Age Calculator

// Introduction
// In this lab, you will be creating a small Node.js app that can take in input on the command line and give the user the answer they're looking for.

// Goal
// When you're done, you'll have a small command-line app that other developers can download and run.

// It's not actually true that 1 dog year is 7 human years. Nor is the calculation we'll follow quite right—to get a truly accurate picture of a dog's age, you need to take their size into account as well.

// But for the purposes of this assignment, you will calculate a dog's real age with the following rules:

// Year 1 of a dog's life is 15 dog years
let doggo = process.argv[2];
let doggoAge = process.argv[3];

let userInput = userInput;
let userInputSum = userInputSum;
if (userInput === 1) {
    return 15;
} else if (userInput === 2) {
    // 15 + 9
    return 24
} else if (userInput > 2) {
    // 15 + 9 + 5 = 29 ( if userInput === 3)
    // 15 + 9 + 5 + 5 = 33 ( if userInput === 4)
    // for loop? to count up from 3 and return the output based on the correct calculation
    for (let i = 3; i >= userInput; i++) {
        Number((userInputSum - 24) / 5 )
    }

    // counts up from 3, subtracts 24, divides by 5. result, or sum (userInputSum), multiplying that by user input
        //// if userInput > 2, Number(userInput - 24) / 5 = userInputPercentage;
        //// userInputSum = userInputPercentage * 5;
    // if userInput > 2, then add 5;
    // return the equivalence in dog years
    return Number(24 + 5);
}

// Year 2 is the equivalent of another 9 years.
// Every year after that is the equivalent of another 5 years.
// Some ages to try to make sure your app works:

// 1 human year -> 15 dog years
// 2 human years -> 24 dog years
// 10 human years -> 64 dog years
// Your app will work with a dog's name and age in human years, and return a sentence about their age in dog years. Running node dog-age-calculator-.js Maisie 3 should output: "Your dog, Maisie, is 3 years old, but that's 29 years old in dog years!"

// Similarly, node dog-age-calculator.js Ralph 4 will output, "Your dog, Ralph, is 4 years old, but that's 34 years old in dog years!"