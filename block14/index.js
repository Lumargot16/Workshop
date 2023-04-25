console.log("----------------------------------------------")
console.log("-----------------FizzBuzz----------------------")

// Declaring the arrays
const array1 = [2,4,6,8,11,20,15,22];
const array2 = [1,2,3,4,5,6,7,8,9,10];
const array3 = [70,42,55,81,21,91,34];
const array4 = [2,4,6,8,10,11,12];
const odd1 = []
const odd2 = []
const odd3 = []
const odd4 = []
let z = 0;
// In each array to get only odd numbers
for (let i = 0; i < array1.length; i++) {
    if (array1[i] % 2 !==0) {
        odd1 [z] = array1 [i];
        z++;
    }
}
console.log ("array1", array1);
console.log ("only odds", odd1);

for (let i = 0; i < array2.length; i++) {
    if (array2[i] % 2 !==0) {
        odd2 [z] = array2 [i];
        z++;
    }
}
console.log ("array2", array2);
console.log ("only odds", odd2);

for (let i = 0; i < array3.length; i++) {
    if (array3[i] % 2 !==0) {
        odd3 [z] = array3 [i];
        z++;
    }
}
console.log ("array3", array3);
console.log ("only odds", odd3);

for (let i = 0; i < array4.length; i++) {
    if (array4[i] % 2 !==0) {
        odd4 [z] = array4 [i];
        z++;
    }
}
console.log ("array4", array4);
console.log ("only odds", odd4);
console.log("------------------------------------------------")
console.log("---------------VOWELS VS CONSONANTS -------------")
/* 
Create a JavaScript code that accepts a string of lowercase letters. Print the word followed by how many consonants and vowels it has.

"a", "e", "i", "o", and "u" are considered vowels. 

Every other letter is considered a consonant.

Hint: Define two variables that keep track of the number of consonants and vowels.
*/
// "hello" --> "hello has 3 consonants and 2 vowels"
// "awesome" --> "awesome has 3 consonants and 4 vowels"

// concatenate --> '{input} has {num of consonants} consonants and (num of vowels) vowels
// count num of consonants --> letters
// count num of vowels

const vowelConsonantInput = 'onomonopia'

let vowelCount = 0;
let consonantCount = 0;

const vowels = [ 'a', 'e', 'i', 'o', 'u']

for (let i=0; i < vowelConsonantInput.length; i++) {
  //  console.log(vowelConsonantInput[i]);
    if (vowels.includes(vowelConsonantInput[i]) ) {
      //  vowelConsonantInput[i]=== 'a' || 
     //   vowelConsonantInput[i]=== 'e' ||
    //    vowelConsonantInput[i]=== 'i' ||
     //   vowelConsonantInput[i]=== 'o' ||
   //    vowelConsonantInput[i]=== 'u' 
       
            // vowel
            // increment vowel count by 1
            vowelCount++;
        } else {
            // consonant
            // increment consonants count by 1
            consonantCount++;
        }
}
// '{input} has {num of consonants} consonants and (num of vowels) vowels'
console.log(
    `${vowelConsonantInput} has ${consonantCount} consonants and ${vowelCount} vowels`
);
console.log ("-----------------------------------------")
console.log("-----------------REVERSE ARRAY---------------")

const originalarray = [1, -1, 2, -3, 5,-8, 13];

console.log('originalarray', originalarray);
// showing original array []
const reversedarray = originalarray.reverse();
console.log('reversedarray', reversedarray);
// showing reversed array 
console.log("----------------------------------------------")
console.log("-----------------FizzBuzz----------------------")

// Numbers from 1 to 100
for (let i=1; i <= 100;i++){
// Printing Fizz for each multiple of 3
    if (i % 3 === 0) {
        console.log("Fizz");
     }
// Printing Fizz for each multiple of 5
    if (i % 5 === 0) {
        console.log("Buzz");
     }
// Printing Fizz for each multiple of 3 and 5
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
     }
    else if (i) { 
        console.log(i);
    }

    }