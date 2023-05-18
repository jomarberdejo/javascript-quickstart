 
//Highlight code
Prism.highlightAll();

// js pop up messages
const displayAlert = () => {
  alert("Hello, World!"); // Output: Hello, World!
};

const displayPrompt = () => {
  let name = prompt("Enter your name"); //Ask the user name.
};

const displayConfirm = () => {
  let result = confirm("Are you sure you want to delete this item?"); //Ask the user for the confirmation.
};

/*end of js pop up messages*/

// arithmetic js code starts here

const addNum = () => {
  alert(2 + 3); // Outputs 5
};

const addString = () => {
  alert("Hello" + " world"); // Outputs Hello world
};

const subtract = () => {
  alert(10 - 5); // outputs 5
};

const multiply = () => {
  alert(4 * 3); // Outputs 12
};

const divide = () => {
  alert(10 / 2); // Outputs 5
};

const modulo = () => {
  alert(10 % 3); // Outputs 1
};

const exponential = () => {
  alert(2 ** 3); // Outputs 8
};

// arithmetic js ends here

// conditional statement starts here

const ifEx = () => {
  let num = 5;
  if (num > 0) {
    alert("The number is positive.");
  }
};

const ifElseEx = () => {
  // if-else
  let num = -5;
  if (num > 0) {
    alert("The number is positive.");
  } else {
    alert("The number is negative.");
  }
};

const ifElseifElseEx = () => {
  // if-else-if-else
  let num = 0;
  if (num > 0) {
    alert("The number is positive.");
  } else if (num < 0) {
    alert("The number is negative.");
  } else {
    alert("The number is zero.");
  }
};

const nestedStatement = () => {
  // nested if-else-if-else
  let num = 10;
  if (num > 0) {
    if (num % 2 == 0) {
      alert("The number is positive and even.");
    } else {
      alert("The number is positive and odd.");
    }
  } else if (num < 0) {
    alert("The number is negative.");
  } else {
    alert("The number is zero.");
  }
};

//conditional statement ends here

//loops starts here

const forLoopEx = () => {
  // JavaScript for loop code example
  for (let i = 0; i < 5; i++) {
    alert(i);
  }
};

const whileLoopEx = () => {
  // JavaScript while loop code example
  let i = 0;

  while (i < 5) {
    alert(i);
    i++;
  }
};

const doWhileLoopEx = () => {
  // JavaScript do while loop code example
  let i = 0;
  do {
    alert(i);
    i++;
  } while (i < 5);
};

/*Loops ends here*/

/*Array starts here*/
 const pushEx= ()=> {
   let fruits = ['apple', 'banana', 'orange'];
// adding a new fruit to the end of the array
    fruits.push('plum');

   alert(fruits); // output: ['apple', 'banana', 'orange', 'plum']
 }
 
 const popEx = ()=> {
   let fruits = ['apple', 'banana', 'orange'];
   // remove the last fruit from the array
   fruits.pop();
   alert(fruits); // output: ['apple', 'banana']
 }
 
 const shiftEx= ()=> {
   let fruits = ['apple', 'banana', 'orange'];

// removing the first fruit from the array
   fruits.shift();

alert(fruits); // output: ['banana', 'orange']
 
 }
 
const unshiftEx= ()=> {
  let fruits = ['banana', 'orange'];

// adding a new fruit to the beginning of the array
fruits.unshift('apple');

alert(fruits); // output: ['apple', 'banana', 'orange']
}


//Multidimentional Array

const multiArrayEx= ()=> {
  const myArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

const data = myArray[1][2];
alert(data); // Output: 6
  
}


//Objects 
const accessObjectEx= ()=> {
  const person = new Object();
  person.name = 'John';
  person.age = 30;
  person.address = {
     street: '123 Main St',
     city: 'New York',
     state: 'NY'
};
  
  alert(person.name); // Output: 'John'
  alert(person['age']); // Output: 30

  
  
}

const modifyObjectEx = ()=> {
  const person = new Object();
  person.name = 'John';
  person.age = 30;
  person.address = {
     street: '123 Main St',
     city: 'New York',
     state: 'NY'
};
  person.name = 'Jane';
  person['age'] = 35;

  alert(person.name); // Output: 'Jane'
  alert(person.age); // Output: 35
}