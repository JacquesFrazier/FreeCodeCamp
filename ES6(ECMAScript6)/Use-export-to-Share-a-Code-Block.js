
//explaination of export
Imagine a file called math_functions.js that contains several functions related to mathematical operations. 
One of them is stored in a variable, add, that takes in two numbers and returns their sum. 
You want to use this function in several different JavaScript files. 
In order to share it with these other files, you first need to export it.


//problem 
There are two string-related functions in the editor. Export both of them using the method of your choice.


//solution
const uppercaseString = (string) => {
  return string.toUpperCase();
}

const lowercaseString = (string) => {
  return string.toLowerCase()
}

//answer below
export{uppercaseString, lowercaseString}
//answer above
