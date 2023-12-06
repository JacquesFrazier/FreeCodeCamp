
//problem
Modify the function increment by adding default parameters so that it will add 1 to number if value is not specified.

  
//orginal look
const increment = (number, value) => number + value;


//solution
const increment = (number, value = 1) => number + value;

