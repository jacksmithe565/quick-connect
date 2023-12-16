/* 
   Filename: ComplexCodeExample.js
   Content: A complex JavaScript code example demonstrating various advanced programming concepts and techniques.
*/

// Constants
const PI = 3.14159;
const MAX_ATTEMPTS = 5;

// Global Variables
let counter = 0;
let result = 0;

// Object Definition
class ComplexNumber {
   constructor(real, imaginary) {
      this.real = real;
      this.imaginary = imaginary;
   }

   add(complex) {
      this.real += complex.real;
      this.imaginary += complex.imaginary;
   }

   multiply(complex) {
      const newReal = this.real * complex.real - this.imaginary * complex.imaginary;
      const newImaginary = this.real * complex.imaginary + this.imaginary * complex.real;
      this.real = newReal;
      this.imaginary = newImaginary;
   }
}

// Function Declaration
function fibonacci(n) {
   if (n <= 2) {
      return 1;
   } else {
      return fibonacci(n - 1) + fibonacci(n - 2);
   }
}

// Helper Function
function isPrime(num) {
   if (num <= 1) {
      return false;
   }
   for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
         return false;
      }
   }
   return true;
}

// Event Listeners
document.getElementById('button').addEventListener('click', function() {
   console.log('Button clicked!');
});

// Loops and Conditionals
for (let i = 0; i < MAX_ATTEMPTS; i++) {
   if (i % 2 === 0) {
      result += i;
   } else {
      result -= i;
   }
}

// Object Instantiation
const complex1 = new ComplexNumber(2, 3);
const complex2 = new ComplexNumber(-1, 2);

// Object Method Invocation
complex1.multiply(complex2);

// Asynchronous Function
async function fetchData() {
   try {
      const response = await fetch('https://api.example.com/data');
      const data = await response.json();
      console.log(data);
   } catch (error) {
      console.error('Error: ', error);
   }
}

// Array Manipulation
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map(num => num ** 2);

// Callback Function
function callbackFunction(callback) {
   setTimeout(() => {
      callback();
   }, 2000);
}

// Generating a random number between 1 and 10
const randomNum = Math.floor(Math.random() * 10) + 1;

// Promises
const promise = new Promise((resolve, reject) => {
   if (randomNum > 5) {
      resolve('Success!');
   } else {
      reject('Failure!');
   }
});

promise
   .then(result => console.log(result))
   .catch(error => console.error(error));

console.log('Execution completed.');