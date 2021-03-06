/*
 * Complete the TODO items below
 */
const users = [
  {
    name: 'zach',
    email: 'zach@codeup.com',
    languages: ['javascript', 'bash']
  },
  {
    name: 'ryan',
    email: 'ryan@codeup.com',
    languages: ['clojure', 'javascript']
  },
  {
    name: 'luis',
    email: 'luis@codeup.com',
    languages: ['java', 'scala', 'php']
  },
  {
    name: 'fernando',
    email: 'fernando@codeup.com',
    languages: ['java', 'php', 'sql']
  },
  {
    name: 'justin',
    email: 'justin@codeup.com',
    languages: ['html', 'css', 'javascript', 'php']
  }
];

// TODO: fill in your name and email and add some programming languages you know
// to the languages array
// TODO: replace the `var` keyword with `const`, then try to reassign a variable
// declared as `const`
var name = 'alfonso';
var email = 'alfonso.ivan.carrillo@gmail.com';
var languages = ["html", "css", "javascript"];

// TODO: rewrite the object literal using object property shorthand
users.push({
  name,
  email,
  languages
});
 console.log(users);
// TODO: replace `var` with `let` in the following variable declarations
let emails = [];
let names = [];

// TODO: rewrite the following using arrow functions
// users.forEach(function(user) {
//   return emails.push(user.email);
// });

users.forEach(user => emails.push(user.email));
console.log(emails);

// users.forEach(function(user) {
//   return names.push(user.name);
// });

users.forEach(user => names.push(user.name));
console.log(names);

// TODO: replace `var` with `let` in the following declaration
let developers = [];

// users.forEach(function(user) {
//   // TODO: rewrite the code below to use object destructuring assignment
//   //       note that you can also use destructuring assignment in the function
//   //       parameter definition
//   const name = user.name;
//   const email = user.email;
//   const languages = user.languages;
//
//   // TODO: rewrite the assignment below to use template strings
//   developers.push(name + '\'s email is ' + email + name + ' knows ' + languages.join(', '));
// });

users.forEach(user = ({name, email, languages}) => {
  developers.push(`${name} 's email is ${email}. ${name} knows ${languages.join(',')}`);
});
console.log(developers);
// TODO: Use `let` for the following variable
let list = '<ul>';

// TODO: rewrite the following loop to use a for..of loop
// developers.forEach(function (developer) {
for (let developer of developers){
  // TODO: rewrite the assignment below to use template strings
  list += `<li> ${developer} </li>`;
}
list += '</ul>';
console.log(list);

document.getElementById("divList").innerHTML = list;

const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulation, currentNumber) => {
  console.log(accumulation + currentNumber);
}, 4);

const salesPeople = [
  {name: "Jim Halpert", sales: 100},
  {name: "Dwight Schrute", sales: 50},
  {name: "Andy Bernard", sales: 150}
];

const totalSales = salesPeople.reduce((total, person) => {
  return total + person.sales;
}, 0);
console.log(totalSales);

function countWords(sentence){
  const words = sentence.split(' ');  // transforms a sentence into an array of words
  const wordCountObject = words.reduce((wordCounts, word) => {
    if(typeof wordCounts[word] === 'undefined'){
      // if the word is not yet present in our object, set it's a value to 1
      wordCounts[word] = 1;
    } else {
      // otherwise increment the existing count
      wordCounts[word] +=1;
    }
    return wordCounts;
  }, {});  // start with an empty object
  return wordCountObject;
}

console.log(countWords('Mary had a little lamb little lamb little lamb'));