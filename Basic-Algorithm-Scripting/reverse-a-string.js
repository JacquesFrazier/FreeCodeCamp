//problem 
Reverse the provided string and return the reversed string.
For example, "hello" should become "olleh".

//answer 1
function reverseString(str) {
  let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
}

//answer 2
function reverseString(str) {
 return str.split('').reverse().join('')
}

reverseString("hello");
