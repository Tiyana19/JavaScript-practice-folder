/*
// Coding Challenge #1
// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).
// Your tasks:
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both
// versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.
// Test data:
// §Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
// m tall.
// §Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
// m tall.
// GOOD LUCK 😀

let markWeight; // in kg
let markHeight; // in meter
let johnWeight; // in kg
let johnHeight; // in meter

    // Data 1
markWeight = 78;
markHeight = 1.69;
johnWeight = 92;
johnHeight = 1.95;

    // Data 2
// markWeight = 95;
// markHeight = 1.88;
// johnWeight = 85;
// johnHeight = 1.76;


let markBMI = markWeight / (markHeight ** 2);
// console.log(markBMI);

let johnBMI = johnWeight / (johnHeight ** 2);
// console.log(johnBMI);

let markHigherBMI = markBMI > johnBMI;
// console.log(markHigherBMI);
*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
// Coding Challenge #2
// Use the BMI example from Challenge #1, and the code you already wrote, and
// improve it.
// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI. The message
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!"
// Hint: Use an if/else statement 😉
// GOOD LUCK 😀

if (markHigherBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's(${johnBMI})!`);
} else {
    console.log(`John's BMI (${johnBMI}) is higher than Mark's(${markBMI})!`);
}

*/

/*
// Coding Challenge #3
// There are two gymnastics teams, Dolphins and Koalas. They compete against each
// other 3 times. The winner with the highest average score wins a trophy!
// Your tasks:
// 1. Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)
// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
// team only wins if it has a higher score than the other team, and the same time a
// score of at least 100 points. Hint: Use a logical operator to test for minimum
// score, as well as multiple else-if blocks 😉
// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
// both teams have the same score and both have a score greater or equal 100
// points. Otherwise, no team wins the trophy
// Test data:
// §Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// §Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// §Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
// GOOD LUCK 

let dolphinsMatch1 = Number(prompt("Enter Team Dolphins score in Match 1."));
let dolphinsMatch2 =  Number(prompt("Enter Team Dolphins score in Match 2."));
let dolphinsMatch3 = Number(prompt("Enter Team Dolphins score in Match 3."));

let koalasMatch1 = Number(prompt("Enter Team Koalas score in Match 1."));
let koalasMatch2 = Number(prompt("Enter Team Koalas score in Match 2."));
let koalasMatch3 =  Number(prompt("Enter Team Koalas score in Match 3."));

let averageDolphinsScore = (dolphinsMatch1 + dolphinsMatch2 + dolphinsMatch3) / 3;
let averageKoalasScore = (koalasMatch1 + koalasMatch2 + koalasMatch3) / 3;

console.log(averageDolphinsScore);
console.log(averageKoalasScore);

// if (averageDolphinsScore === averageKoalasScore) {
//     console.log(`It's draw ${averageDolphinsScore} between both Teams.`);
// } else if (averageDolphinsScore > averageKoalasScore) {
//     console.log(`Team Dolphin wins the Trophy! by ${averageDolphinsScore - averageKoalasScore} scores.`);
// } else {
//         console.log(`Team Dolphin wins the Trophy! by ${averageKoalasScore - averageDolphinsScore} scores.`);
// }

if (averageDolphinsScore > averageKoalasScore && averageDolphinsScore >= 100) {
    console.log(`Team Dolphin wins the Trophy! by ${averageDolphinsScore - averageKoalasScore} scores.`);
} else if (averageKoalasScore > averageDolphinsScore && averageKoalasScore >= 100) {
    console.log(`Team Dolphin wins the Trophy! by ${averageKoalasScore - averageDolphinsScore} scores.`);
} else if (averageDolphinsScore === averageKoalasScore && averageDolphinsScore >= 100 && averageKoalasScore >= 100) {
    console.log(`It's draw ${averageDolphinsScore} between both Teams.`);
}
else {
    console.log("NO one wins the Trophy!");
}
*/

/*
// Coding Challenge #4
// Steven wants to build a very simple tip calculator for whenever he goes eating in a
// restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
// 300. If the value is different, the tip is 20%.
// Your tasks:
// 1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
// this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can
// start with an if/else statement, and then try to convert it to a ternary
// operator!)
// 2. Print a string to the console containing the bill value, the tip, and the final value
// (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
// 316.25”
// Test data:
// §
// Data 1: Test for bill values 275, 40 and 430
// Hints:
// §To calculate 20% of a value, simply multiply it by 20/100 = 0.2
// §Value X is between 50 and 300, if it's >= 50 && <= 300 😉
// GOOD LUCK 😀

let bill = 400;
// bill >= 50 && bill <= 300;
let tip = 50 <= bill && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}.`);
*/

/*
// JavaScript Fundamentals – Part 2

// Coding Challenge #1
// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
// gymnastics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated (so
// one average score per team).
// A team only wins if it has at least double the average score of the other team.
// Otherwise, no team wins!
// Your tasks:
// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
// 2. Use the function to calculate the average for both teams
// 3. Create a function 'checkWinner' that takes the average score of each team
// as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
// to the console, together with the victory points, according to the rule above.
// Example: "Koalas win (30 vs. 13)"
// 4. Use the 'checkWinner' function to determine the winner for both Data 1 and
// Data 2
// 5. Ignore draws this time
// Test data:
// §
// §
// Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

// GOOD LUCK 😀

const calcAverage = (match1Score, match2Score, match3Score) => {
    (match1Score + match2Score + match3Score) / 3;  // there is no need of return as it is arrow function with only onle line of code.
};                              // this function will automatically return the output from the function body to where it gets called.

const avgDolphins = calcAverage(85, 54, 41);
const avgKoalas = calcAverage(99, 180, 99);

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins > (2 * avgKoalas)) {
        return `Dolphins win (${avgDolphins} vs. ${avgKoalas})`;
    } else if (avgKoalas > (2 * avgDolphins)) {
        return `Koalas win (${avgKoalas} vs. ${avgDolphins})`;
    } else {
        return `No Team wins`;
    }
}
console.log(checkWinner(avgDolphins, avgKoalas));
*/

/*
// Coding Challenge #2

// Steven is still building his tip calculator, using the same rules as before: Tip 15% of
// the bill if the bill value is between 50 and 300, and if the value is different, the tip is
// 20%.
// Your tasks:
// 1. Write a function 'calcTip' that takes any bill value as an input and returns
// the corresponding tip, calculated based on the rules above (you can check out
// the code from first tip calculator challenge if you need to). Use the function
// type you like the most. Test the function using a bill value of 100
// 2. And now let's use arrays! So create an array 'bills' containing the test data
// below
// 3. Create an array 'tips' containing the tip value for each bill, calculated from
// the function you created before
// 4. Bonus: Create an array 'total' containing the total values, so the bill + tip
// Test data: 125, 555 and 44

// GOOD LUCK 😀

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills);
console.log(tips);
console.log(total);
*/

/*
// Coding Challenge #3
// Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
// implement the calculations! Remember: BMI = mass / height ** 2 = mass
// / (height * height) (mass in kg and height in meter)
// Your tasks:
// 1. For each of them, create an object with properties for their full name, mass, and
// height (Mark Miller and John Smith)
// 2. Create a 'calcBMI' method on each object to calculate the BMI (the same
// method on both objects). Store the BMI value to a property, and also return it
// from the method
// 3. Log to the console who has the higher BMI, together with the full name and the
// respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
// Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
// tall
// GOOD LUCK 😀

const mark = {
    firstName: 'Mark',
    lastName: 'Miller',
    mass: 78,
    height: 1.69,

    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
}
const john = {
    firstName: 'John',
    lastName: 'Smith',
    mass: 92,
    height: 1.95,

    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

// "John's BMI (28.3) is higher than Mark's (23.9)!"

mark.calcBMI() > john.calcBMI() ?   // I have used ternary operator here 
    console.log(`${mark.firstName} ${mark.lastName}'s BMI (${mark.bmi}) is higher than ${john.firstName} ${john.lastName}'s (${john.bmi})!`) :
    console.log(`${john.firstName} ${john.lastName}'s BMI (${john.bmi}) is higher than ${mark.firstName} ${mark.lastName}'s (${mark.bmi})!`);
    
*/

/*
// Coding Challenge #4
// Let's improve Steven's tip calculator even more, this time using loops!
// Your tasks:
// 1. Create an array 'bills' containing all 10 test bill values
// 2. Create empty arrays for the tips and the totals ('tips' and 'totals')
// 3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate
// tips and total values (bill + tip) for every bill value in the bills array. Use a for
// loop to perform the 10 calculations!
// Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
// Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the
// tips and totals arrays 😉
// Bonus:
// 4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as
// an argument. This function calculates the average of all numbers in the given
// array. This is a difficult challenge (we haven't done this before)! Here is how to
// solve it:
// 4.1.
// First, you will need to add up all values in the array. To do the addition,
// start by creating a variable 'sum' that starts at 0. Then loop over the
// array using a for loop. In each iteration, add the current value to the
// 'sum' variable. This way, by the end of the loop, you have all values
// added together
// 4.2.
// To calculate the average, divide the sum you calculated before by the
// length of the array (because that's the number of elements)
// 4.3.
// Call the function with the 'totals' array
// GOOD LUCK 😀

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];
const totals = [];

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
for (let i = 0; i < bills.length; i++){
    let tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(bills[i] + tips[i]);
}
console.log(bills);
console.log(tips);
console.log(totals);

//Bonus: Write a function 'calcAverage' which takes an array called 'arr' as
// an argument. This function calculates the average of all numbers in the given
// array.
    
const calcAverage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    const avg = sum / arr.length;
    return avg;
}
console.log(calcAverage(totals));
*/