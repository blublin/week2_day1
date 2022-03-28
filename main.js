/*
Using what we've learned about the Math library in JavaScript,
complete the following function that should return a value between 1 through 6 at random.
*/

function d6() {
    var max = 6;
    var min = 1;
  
    // Stage 1
    var roll = Math.random();
    // 0 - 0.9999999999999
  
    // Stage 2
    roll *= (max-(min-1));  // roll = roll * 6
    // 0 - 5.999999999999999
  
    // Stage 3
    // roll = Math.ceil( roll );
    // 0, 1, 2, 3, 4, 5, 6 // Too many values
  
    // Stage 3v2
    roll = Math.floor( roll );
    // 0, 1, 2, 3, 4, 5
    
    // Stage 4
    roll += min; // roll += 1 // roll = roll + 1
    // 1, 2, 3, 4, 5, 6
  
    // var roll = Math.floor( Math.random() * 6 ) + 1;
 
    return roll;
}
// quick 50 iteration loop
// classic notation: for (var i = 0; i < 50; i++)
for (let x of Array(50).keys())  {  
  var playerRoll = d6();
  console.log("The player rolled: " + playerRoll);
}


/*
Write a function that will answer all of
our questions by randomly choosing a response
*/

var lifesAnswers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes – definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
];

// console.log( lifesAnswers.length ); // 20

// arr is a parameter
// which acts as a placeholder for whatever is passed in
function oracle(arr) {
    // Stage 1
    var roll = Math.random();
    // 0 - 0.9999999999999
  
    // Stage 2.0
    var max = arr.length;
    // integer that is the length of whatever array is passed in
  
    // Stage 2.5
    roll *= max; // roll = roll * max // roll = roll * arr.length
    // 0 - 19.99999999 (if we use lifesAnswers)
    
    // stage 3
    roll = Math.floor( roll );
    // 0 <-> 19 integers (represents the indexes)
    
}

// quick 50 iteration loop
// classic notation: for (var i = 0; i < 50; i++)
for (let x of Array(50).keys())  {  
  // Passing in lifesAnswers array as an argument to the oracle function
  console.log( oracle(lifesAnswers()) );
}
