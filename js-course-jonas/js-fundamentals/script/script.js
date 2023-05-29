'use strict';
/* 
      // typeof
let javascriptIsFun = true;

console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'Jonas');

javascriptIsFun = 'Yes!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1999;
console.log(typeof year);

console.log(typeof null);  // it will show null as an object. and This is an Bug in JavaScript. 
*/

// let, const and var
/*
let age = 30;  // let is block scoped
age = 31;   // this is called reassigning a value or we mutate the age variable. 
            // if you want to mutate a variable then using let is good choice.
console.log(age);

const birthYear = 1998; // variable created with const are immutate .
// birthYear = 1999;    // Uncaught TypeError: Assignment to constant variable.
        // we cannot declare empty const variables.
//const year;             // Uncaught SyntaxError: Missing initializer in const declaration

var job = 'programmer';  // var is a function scoped 
job = 'teacher';

*/

/*
            // Basic Operator 
    // Mathe Operator
const currentYear = 2023;
const tarunaBirthYear = 1999;
const tarunaAge = currentYear - tarunaBirthYear;

console.log(tarunaAge);
console.log(tarunaAge + 10)
console.log(tarunaAge * 2);
console.log(tarunaAge / 4);
console.log(5 ** 3);

const firstName = 'Taruna';
const lastName = 'Rajpurohit';
console.log(firstName + ' ' + lastName);

    // Assignment operator 
let x = 10 + 5;     // 15
x += 10;          // x = x + 10  // 25
x *= 4;          // x = x * 4   // 100
x++;            // x = x + 1   // 101
x--;           // x = x - 1   // 100
x--;          // x = x -1    // 99
console.log(x);

    // Comparison Operator    >, <, >=, <=
const adultAge = 18;
console.log(tarunaAge < adultAge); // false
console.log(tarunaAge >= adultAge) // true
*/

/*
            // Operator Precedence

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence 


    //  Operator precedence determines how 
    //     operators are parsed concerning each other. 
    //     Operators with higher precedence become the operands 
    //     of operators with lower precedence.  

const year = 2023;

//     because subtraction (11) have higher 
//     precedence than comparison operator(<)(9) 
//     so subtraction(year - 1999) and(year - 2001)
//     will happend first than it will 
//     compair the result(<).  
console.log(year - 1999 < year - 2001); // false 
*/

/*
            // Strings and Template Literals
const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2023;

const jonas = "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + '!';
console.log(jonas);

        // template literals
const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string...`);

console.log('String with \n\
multiple \n\
lines.');

console.log(`String with
multiple
lines.
using backquotes`);
*/

/*
            // Type Conversion and Type Coercion 
    // type conversion
const inputYear = '1991';
console.log(typeof inputYear);
console.log(inputYear + 18);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

const num = 23;
console.log(String(num), num);  // string and number will show in different color

    // type coercion
console.log('I am ' + 24 + ' years old');  // in these cases JavaScript type coercion is quite useful as it will concatenate number and string. unlike some other programming languages like: Python.
console.log('23' - '10' - 3);   // 10
console.log('23' + '10' + 3);   // 23103
console.log('24' / '2');        // 12
console.log('24' * '5');        // 120

let n = '1' + 1; // 11
n = n - 1;
console.log(n);     // 10

console.log(2 + 3 + 4 + '5');   // 95

console.log('10' - '4' - '3' - 2 + '5');    // 15
console.log('10' - '4' - '3' - 2 + 5);     // 6
*/

/*
            // Truthy and Falsy values
    // 5 falsy values : 0, "", undefined, null, NaN

console.log(Boolean(0));            // falsy
console.log(Boolean(undefined));    // falsy
console.log(Boolean('jonas'));      // truthy
console.log(Boolean(''));           // falsy 'empty string'
console.log(Boolean({}));           // truthy 'empty object'
console.log(Boolean(NaN));          // falsy  'Not a Number'

let height; // height is undefined as we did not assign it any value.
if (height) {
    console.log("Height is defined!");
} else {
    console.log("Height is undefined!");
} // output : Height is undefined! 
*/

/*
            // Equality Operator == === != !==
    // == loose Equal // '18' == 18 is same for it  // because of type coercion
    // === Strict Equal // also check the type // '18' === 18 is not same for it because one is a string type and other one is number type.
    
let age = 18;
// let age = '19';
if (age == 18){
    console.log("(loose equal) You are an adult.");
}
if (age === 18) { // also check the type
    console.log("(strict equal) You are an adult.")
}

        // unequal operator 
if (age != 18) {
    console.log("(loose unequal) age is not 18.");
}
if (age !== 18) {
    console.log("(strict unequal) age is not 18.");
}
*/

/*
            // Logical operators &&, ||, !
const age = 28;

if (age >= 20 && age < 29) {
    console.log("You are in your twenties.");
}
if (age < 20 || age > 30) {
    console.log("You are not in your twenties.");
}

const adult = true;

if (!adult) {
    console.log("You are not adult yet.");
}
else {
    console.log("You are an adult.");
}
*/

/*
            // The Switch Statements
const day = prompt('what day is today?');

switch (day) {
    case 'monday':
        console.log('frontend project practice');
        break;
    case 'tuesday':         // adding both case just after another the statement will work on both cases.
    case 'wednesday':
        console.log('javascript tutorial and practice');    // this will logout on both cases tuesday and wednesday.
        break;
    case 'thrusday':
        console.log('python tutorial practice');
        console.log('c++ tutorial and practice');
        break;
    case 'friday':
        console.log('mathematics study');
        break;
    case 'saturday':
        console.log('DSA practice');
        break;
    case 'sunday':
        console.log('language learning practice');
        break;
    default:
        console.log('please enter the correct day!');
}
        // same question in if else statements
// if (day === 'monday') {
//     console.log('Frontend projects practice');
// } else if (day === 'tuesday' || day === 'wednesday') {
//     console.log('javascript tutorial and practice');
// } else if (day === 'thrusday') {
//     console.log('python tutorial and practice');
//     console.log('c++ tutorial and practice');
// } else if (day === 'friday') {
//     console.log('mathematics study');
// } else if (day === 'saturday') {
//     console.log('DSA practice');
// } else if (day === 'sunday') {
//     console.log('language learning practice');
// } else {
//     console.log('please enter the correct day!');
// }
*/

/*
            // The Conditional (Ternary) Operator
let age = 23;

// age >= 18 ? console.log('I like to drink wine') : console.log('I like to drink water');

// let drink = age >= 18 ? 'wine' : 'water';
// console.log(`I like to drink ${drink}`);

console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);

        // above question in if-else statements, in these kind of question using ternary operator is best choice.
// if(age >= 18) {
//     console.log("I like to drink wine");
// }else {
//     console.log("I like to drink water");
// }
*/
/*
            // Function
function logger() {
    console.log("My name is Taruna.");
}

// this is called calling a function / running a function / invoking a function 
logger();
logger();

function fruitProcess(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcess(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcess(2, 4);
console.log(appleOrangeJuice);

// another example of function 
let counter = 0;

function addFive() {
    counter += 5;
    return counter;     // to take this value out of the function we use return
}
    // From here value of counter is 5
function addTwo() {
    counter += 2;
    return counter;
}

console.log(addFive(counter));  // 5
console.log(addTwo(counter));   // 7


*/

// Function Declaration

/* MAIN difference between function declaratino and function expression
    is  that we can call the function declaration before declaraing it but 
    we can not do the same with function expression. */
// Cannot access 'calAge2' before initialization // this error will show it
/*
function calAge1(birthYear) {
    return 2023 - birthYear;
}

const age1 = calAge1(1998);

    // Function Expression
const calAge2 = function (birthYear) {
    return 2023 - birthYear;
};

const age2 = calAge2(1999);
console.log(age1, age2);

    // Arrow Function   () => {}
const calAge3 = birthYear => 2023 - birthYear;
const age3 = calAge3(1997);

console.log(age3);
    
const yearsUntilRetirement = birthYear => {     // when we have more lines of code we use {} and also we need return keyword
    const age = 2023 - birthYear;
    const retirement = 65 - age;
    return retirement;
};

console.log(yearsUntilRetirement(1974));

const yearsUntilRetirement2 = (birthYear, firstName) => {     // when we have more than 1 parameters we need () 
    const age = 2023 - birthYear;
    const retirement = 65 - age;
    return `${firstName} had ${retirement} years left until retirement.`;
};

console.log(yearsUntilRetirement2(1997, 'Yibo'));
console.log(yearsUntilRetirement2(1999, 'Taruna'));

const cutFruitPieces = function (fruit) {
    return fruit * 4;
};
const fruitProcessor = function (fruit1, fruit1no, fruit2, fruit2no) {
    const fruit1Pieces = cutFruitPieces(fruit1no);
    const fruit2Pieces = cutFruitPieces(fruit2no);

    const juice = `Juice with ${fruit1no} pieces of ${fruit1} and ${fruit2no} pieces of ${fruit2}.`;
    return juice;
};

console.log(fruitProcessor('watermelon', 4, 'apple', 2));
*/

////////////////////////////////////////////////////////////////////////////

/*
        // Array 
const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

    // Another way of declaring Array
// const years = new Array(1991, 1997, 1998, 1999);    // notice we used Parentheses () here.
// console.log(years);

console.log(friends[0]);    // Retrieving array (means getting a something)
// console.log(years[2]);

console.log(friends.length);
// console.log(years[years.length - 1]);

friends[2] = 'Joy';     // mutate the array
console.log(friends);
*/
/* ⬆️ WAIT A SECOND!!!  didn't friends array was declared with const than
        how come it get mutate? 'const' is immutate, isn't it? 
        well only primitive value are immutate with const. and array is not 
        an primitive value. so we can mutate an array even though it is declared 
        with an const.
        but we can not do this ⬇️
    */
// Replacing the entire array that is declared with 'const'
// friends = ['bob', 'mike', 'will'];  // Uncaught TypeError: Assignment to constant variable.

/*
const firstName = 'Jonas';
const user = [firstName, 'Schemedtmann', 2023 - 1991, 'teacher', friends];
console.log(user);
console.log(user.length);


// Exercise 

const age = birthYear => 2023 - birthYear;

const years = [1998, 1997, 1991, 1999];

const age1 = age(years[0]);
const age2 = age(years[1]);
const age3 = age(years[years.length - 1]);
console.log(age1, age2, age3);

const ageArr = [age(years[0]), age(years[1]), age(years[years.length - 1])];
console.log(ageArr);
*/
/*
        // Array methods (push, unshift, pop, shift)
const arr = ['bottle', 'pens', 'mobile', 19, 'laptop'];
console.log(arr);

arr.push('books');  // Add End     // add new value at the end of array.
console.log(arr);

// const len = arr.push('color');  // push method return the length of array after it push the new value. we get it by storing it into a new variable.
// console.log(len);
// console.log(arr);

arr.unshift('pencil');  // Add Start    // add new value at the start of array.
console.log(arr);

// const len = arr.unshift('notebook');    // unshift method return the length of array just like push method, after it add the new value. we get it by storing it into a new variable.
// console.log(len);
// console.log(arr);

arr.pop();  // Remove End // remove the last value of array.
console.log(arr);

// const removeValue = arr.pop();     // pop method return the value that it removed. we get it by storing it into a new variable.
// console.log(arr);
// console.log(removeValue);

arr.shift();    // Remove Start    // remove the first value of array.
console.log(arr);

// const removeValue = arr.shift();    // shift method return the value that it removed. we get it by storing it into a new variable.
// console.log(arr);
// console.log(removeValue);


const indexOfMobile = arr.indexOf('mobile');    // indexOf method will return the index of given value in Parentheses 
console.log(indexOfMobile);
console.log(arr.indexOf('box'));    // if the given value is not present in the array it will return -1.


console.log(arr.includes('mobile'));  // true  // includes method will return the boolean value instead of index number.
console.log(arr.includes('box'));    // false

// includes method uses strict equality 
console.log(arr.includes('19'));    // false 
console.log(arr.includes(19));      // true 

*/
////////////////////////////////////////////////////////////////////////
// OBJECTS
/*
// this is simplest way of declaring objects. its called object literal syntax {}
        // key or property : value
const user = {
    firstName: 'Jonas',
    lastName: 'Schemedtmann',
    age: 2023 - 1991,
    job: 'Teacher',
    friends: ['Mike', 'Will', 'Andrei']
};
console.log(user);  

    // .dot notation and bracket notation
console.log(user.firstName);    // dot notation 
console.log(user['firstName']);     // bracket notation // we need to specify property name as a string in bracket []

  // its very common to use bracket notation like this  //  ⬇️ we can also put an operation here as we know that any operation is basically an expression which produce a value. 
const namekey = 'Name';
console.log(user['first' + namekey]);
console.log(user['last' + namekey]);

// console.log(user.'first' + namekey);    // this will not work in dot notaion // Uncaught SyntaxError: Unexpected string

const interestedIn = prompt('What do you want to know about User? Choose between firstName, lastName, age, job, and friends');

console.log(user[interestedIn]);    // as we know we can put any expression in bracket // so interestedIn is an expression that produce an value.

// console.log(user.interestedIn); // dot notation will not work here // it will give undefiend.
// Undefined is what we get when we try to access a property on an object that does not exist
// ⬆️ as we know Undefined is an 'Falsy' value, from this, we can give better message to user when they try to access an property that does not exist in object.

if (user[interestedIn]) {
    console.log(user[interestedIn]);
} else {
    console.log('Wrong Request! Choose between firstName, lastName, age, job, and friends');
}

    // adding new key and value to the object
user.location = 'Portugal';
user['Gender'] = 'Male';
console.log(user);

// Small CHALLENGE 
// Jonas has 3 friends, and his best friend is called Mike.
console.log(`${user.firstName} has ${user.friends.length} friends, and his best friend is called ${user.friends[0]}`);
// why this ⬆️ worked ? because of higher precedence of .dot (remember its an operator) and bracket (its also an operator) and they both work from left to right.
*/

/*
    // OBJECT Methods
// function that are attached to objects are called methods.

const user = {
    firstName: 'Jonas',
    lastName: 'Schemedtmann',
    birthYear: 1991,
    job: 'Teacher',
    friends: ['Mike', 'Will', 'Andrei'],
    hasDriverLicence: true,

    // function calcAge(birthYear){    // function declaration will not work here. 
    //     return 2023 - birthYear;
    // }



    //  ⬇️ we have function name as property of object
    // calcAge: function (birthYear) {     // only function expression will work here.
    //     return 2023 - birthYear;
    // }

    // calcAge: function () {
    //     return 2023 - this.birthYear;
    // }

    calcAge: function () {
        this.age  = 2023 - this.birthYear;   // A good practice to store the age property in object and retrieving it when needed
        return this.age;
    },

    // getSummary: function () {        // using bracket notation
    //         return `${this['firstName']} is a ${this['calcAge']()}-year old ${this['job']}, and he has ${this['hasDriverLicence'] ? 'a' : 'No' } driver's license.`;
    // }
    
    getSummary: function () {       // using dot notation
            return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriverLicence ? 'a' : 'No'} driver's license.`;
            // ${this.age} why we didn't use age property ⬆️ here ? because calcAge is not called yet and age property is declared inside the calcAge function.
    }
};

// console.log(user.calcAge());
// console.log(user['calcAge']()); // remember property value will go as a string in bracket notation.
// console.log(user.age);
// console.log(user['age']);

// Small CHALLENGE 
// 'Jonas is a 46-year old teacher, and he has a/no driver's license' 

// console.log(user['getSummary']());   // using bracket notation
console.log(user.getSummary());        // using dot notation 
*/

////////////////////////////////////////////////////////////////////////////////////////

/*
    // FOR LOOP ( also known as counter loop )
// For loop keeps running while condition is TRUE 
// for (let rep = 1; rep <= 10; rep++){
//     console.log(`Lifting weights repetition no. ${rep}`);
// }

const arr = ['Jonas','Schemedtmann', 32, 'Teacher', ['Mike', 'Andrei', 'Colt'], true];

const types = [];

for (let i = 0; i < arr.length; i++){
    // Reading from arr array
    console.log(arr[i], typeof arr[i]);

    // Filling types Array
    // types[i] = typeof arr[i];

    // another way is: using push method remember to use push not unshift. 
    types.push(typeof arr[i]);
}
console.log(types);

const birthYears = [1991, 1998, 1997, 1999, 1974];
const ages = [];

for (let i = 0; i < birthYears.length; i++) {
    // ages[i] = 2023 - birthYears[i];
    ages.push(2023 - birthYears[i]);
}
console.log(ages);

// Continues and Break
console.log('----ONLY STRINGS (Continue and break)----');

for (let i = 0; i < arr.length; i++){
    if (typeof arr[i] !== 'string') continue;
// when ⬆️ this is going to be true, ⬇️ this will not run because of 'continue' it will immeditely exit the current iteration .
    console.log(arr[i], typeof arr[i]);
}

console.log('----BREAK WITH NUMBER----');

for (let i = 0; i < arr.length; i++){
    if (typeof arr[i] === 'number') break;
    // when the number is found the loop is terminated completely 
    console.log(arr[i], typeof arr[i]);
}
console.log('----Next Lecture----')
for (let i = arr.length - 1; i >= 0; i--) {
    console.log(i, arr[i]);
}

// Nested Loop 
for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`-----Starting Exercise no. ${exercise}`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exercise}. Lifting repition no. ${rep}`);
    }
}

// WHILE LOOP // it means it will loop WHILE the condition is true
    //  (While does not have to depend on any
    // counter so use it whenever you need a loop without a
    // counter. (means you don't know how many iteration a 
    // loop will have.like: in some random cases.))

let rep = 1;
while (rep <= 10) {
    console.log(`Lifting weights repetition no. ${rep}`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6){
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) {
        console.log(`Loop is about to END...`);
    }
}
*/

// arrayDiff([1, 2, 2, 2, 3], [2]) == [1, 3];

// const arrayDiff = function (arr1, arr2) {
//   let newArray = [];
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr2.length === 0) {
//       newArray = arr1;
//     } else {
//       console.log(`hi it else ${i}`);
//       for (let j = 0; j <= arr2.length - 1; j++) {
//         if (arr1[i] === arr2[j]) {
//           arr1.splice(i, 1);
//           console.log(`hi it if ${i} and ${j}`);
//         } else {
//           newArray.push(arr1[i]);
//           console.log(`hi it else ${i} and ${j}`);
//         }
//       }
//     }
//   }

//   return newArray;
// };

const arrayDiff = function (arr1, arr2) {
  const newArr = [];
  if (arr1.length === 0 || arr2.length === 0) {
    return arr1;
  } else {
    for (let i = 0; i < arr1.length; i++) {
      for (let j = 0; j < arr2.length; j++) {
        if (arr1[i] === arr2[j]) {
          continue;
        } else {
          newArr.push(arr1[i]);
        }
      }
    }
    return newArr;
  }
};

console.log(arrayDiff([1, 2, 2, 2, 3], []));
console.log('second Example ');
console.log(arrayDiff([1, 2, 2, 2, 3], [2]));
console.log('third Example');
console.log(arrayDiff([1, 2, 2, 2, 3], [1, 3]));
console.log('fourth Example');
console.log(arrayDiff([], [1, 2, 2, 2, 3]));

// function arrayDiff(a, b) {
//   const newArr = [];
//   for (let i = 0; i < a.length; i++) {
//     b.forEach(element => element !== a[i]);
//     newArr.push(a[i]);
//   }
//   return newArr;
// }
// console.log(arrayDiff([1, 2, 2, 2, 3], [2]));
