//explation of import
import allows you to choose which parts of a file or module to load. 
In the previous lesson, the examples exported add from the math_functions.js file


//problem
Add the appropriate import statement that will allow the current file to use 
the uppercaseString and lowercaseString functions you exported in the previous lesson. 
These functions are in a file called string_functions.js, which is in the same directory as the current file.

  
//solution
import{uppercaseString, lowercaseString } from './string_functions.js'  
// Only change code above this line

uppercaseString("hello");
lowercaseString("WORLD!");
