//problem 
Return the length of the longest word in the provided sentence.

Your response should be a number.

//solution 1
function findLongestWordLength(str) {
  let words = str.split(' ');
  let maxLength = 0;

  for( let i = 0; i < words.length; i++){
  if(words[i].length > maxLength){
     maxLength = words[i].length
  } 
  }
    return maxLength
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");

//solution 2
function findLongestWordLength(str) {
  return Math.max(...str.split(" ").map(word => word.length));
}

//solution 3
function findLongestWordLength(str) {
let longestLength = 0;
let currentLength = 0;

for (let i = 0; i < str.length; i++) {
  if (str[i] === " ") {
    if (currentLength > longestLength) {
      longestLength = currentLength;
    }
    currentLength = 0;
  } else {
    currentLength++;
  }
}
if (currentLength > longestLength) {
  longestLength = currentLength;
}

return longestLength;
}

//solution 4
function findLongestWordLength(s) {
  return s
    .split(' ')
    .reduce((longest, word) => Math.max(longest, word.length), 0);
}
