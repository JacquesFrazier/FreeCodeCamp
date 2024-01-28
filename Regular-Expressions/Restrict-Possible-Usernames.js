//problem

Usernames are used everywhere on the internet. They are what give users a unique identity on their favorite sites.
You need to check all the usernames in a database. Here are some simple rules that users have to follow when creating their username.
Usernames can only use alphanumeric characters.
The only numbers in the username have to be at the end. There can be zero or more of them at the end. Username cannot start with the number.
Username letters can be lowercase and uppercase.
Usernames have to be at least two characters long. A two-character username can only use alphabet letters as characters.
Change the regex userCheck to fit the constraints listed above.


//solution 1

let username = "JackOfAllTrades";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i; // Change this line
let result = userCheck.test(username);

//explation-> start from 0. lol
0. ^ - start of input
1. [a-z] - first character is a letter
2. [a-z]+ - following characters are letters
3. \d*$ - input ends with 0 or more digits
4. | - or
5. ^[a-z] - first character is a letter
6. \d\d+ - following characters are 2 or more digits
7. $ - end of input


//solution 2

let username = "JackOfAllTrades";
const userCheck = /^[a-z]([0-9]{2,}|[a-z]+\d*)$/i;
let result = userCheck.test(username);

//explation 
1. ^ - start of input
2. [a-z] - first character is a letter
3. [0-9]{2,} - ends with two or more numbers
4. | - or
5. [a-z]+ - has one or more letters next
6. \d* - and ends with zero or more numbers
7. $ - end of input
8. i - ignore case of input


