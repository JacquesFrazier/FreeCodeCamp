
//question
Rewrite the function assigned to the variable magic which returns a new Date() to use arrow function syntax.
Also, make sure nothing is defined using the keyword var.


  
//orginal look
var magic = function() {
  return new Date();
};


//solution

const magic = () => {
  return new Date();
};
