/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)
var votingAge = 18;
if (votingAge >= 18) {
    console.log(true);
}
//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)
var variable = true;
if (votingAge != 17) {
    variable = false;
    console.log(variable);
}
//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method
var year = "1999";
console.log(year);
var year = 2000;
console.log(year);




//Task d: Write a function to multiply a*b 
let a = 5;
let b = 5;
let c = a * b;
console.log(c);




/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 
function dogCal(age) {
    var age = prompt("What is your age")
    const dog = 7;
    var dogAge = age * dog;
    console.log(dogAge);
}
dogCal();



/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996
function dogFeed(weight, age) {
    var weight = prompt("What is your dogs weight?")
    var year = prompt("What is the age of your dog?")
    var feed = 0;
    if (year >= 1) {
        if (weight > 15) {
            feed = weight * .02;
        } else if (weight <= 15) {
            feed = weight * .03;
        } else if (weight <= 10) {
            feed = weight * .04;
        } else if (weight <= 5) {
            feed = weight * .05;
        }
    } else if (year < 1) {
        if (year <= .99) {
            feed = weight * .04;
        } else if (year <= .5833) {
            feed = weight * .05;
        } else if (year <= .33) {
            feed = weight * .1;
        }
    } else {
        console.log("Invalid input")
    }
    console.log("You should feed your dod ", feed, " lbs of dog food.")
}
dogFeed();
/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 
var usrc = prompt("1 for Rock, 2 for Paper, or 3 for Sissors?");
var compc = Math.floor((Math.random() * 3) + 1);
if (usrc == 1) {
    if (compc == 1) {
        console.log("You tied with the computer")
    } else if (compc == 2) {
        console.log("You Lost")
    } else if (compc == 3) {
        console.log("You Won!")
    }
} else if (usrc == 2) {
    if (compc == 1) {
        console.log("You Won!")
    } else if (compc == 2) {
        console.log("You tied with the computer")
    } else if (compc == 3) {
        console.log("You Lost")
    }
} else if (usrc == 3) {
    if (compc == 1) {
        console.log("You Lost")
    } else if (compc == 2) {
        console.log("You Won!")
    } else if (compc == 3) {
        console.log("You tied with the computer")
    }
} else {
    console.log("Invalid Input")
}
/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles
var km = prompt("input a value to turn KM into Miles");
var miles = km * .621371;
console.log(miles, "Miles");
//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
var feet = prompt("Input a value to turn Feet into Centimeters")
var cent = feet * 30.48;
console.log(cent, "Centimeters");
/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
for (var i = 99; i > 0; i--) {
    console.log(i, ' bottles of soda on the wall, ', i, ' bottles of soda, take one down pass it around ', i - 1, ' bottles of soda on the wall')
}
/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F
var grade = prompt("Enter final grade");
if (grade >= 90) {
    console.log('A');
} else if (grade >= 80) {
    console.log('B')
} else if (grade >= 70) {
    console.log('C')
} else if (grade >= 60) {
    console.log('D')
} else if (grade <= 59) {
    console.log('F')
} else {
    console.log("Invalid Input")
}



/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method





/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object