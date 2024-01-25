//problem
We've defined a function countOnline which accepts one argument, allUsers.
Use a for...in statement inside this function to loop through the allUsers 
object and return the number of users whose online property is set to true. 
An example of an object which could be passed to countOnline is shown below. 
Each user will have an online property set to either true or false.
{
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}

//example display
const users = {
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}

//solution
function countOnline(allUsers) {
  // Only change code below this line
  //solution
  let result = 0;
  for (let users in allUsers) {
    if (allUsers[users].online === true) {
      result++;
    }
  }
  return result;
  // Only change code above this line
}

console.log(countOnline(users));
