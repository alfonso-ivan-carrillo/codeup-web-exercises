
const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

// var language = users.filter(function(users){
//     return users.languages.length >= 3;
// })
// console.log(language);

const language = users.filter(users => users.languages.length >= 3);
console.log(language);

// var email = users.map(function(users){
//     return users.email;
// })
// console.log(email);

const email = users.map(users => users.email);
console.log(email);


function getAvg(users){
const experience = users.reduce((total, years) => {
    return total + years.yearsOfExperience;
}, 0);
    return experience / users.length;
}
console.log(getAvg(users));

// instructor solution to above question

let totalYears = users.reduce((totalYears, user)=>{
    return totalYears + user.yearsOfExperience;
}, 0);
console.log(totalYears/users.length);



// instructor solution for question 5

// let LongestEmail = users.reduce((startLength, addletter)=> startLength.email.length > addletter.email.length ? startLength : addletter );



 // const longestEmail = users.reduce((previousValue, currentValue)=>{
//         if(previousValue.length < currentValue.email.length){
//             previousValue + currentValue.email;
//         }
//         return previousValue;
// },{});

// console.log(longestEmail)


// let longestEmail = users.reduce((uniqueSpecialty, restaurant) => {
//     if(!uniqueSpecialty.includes(restaurant.email)){
//         uniqueSpecialty.push(restaurant.email);
//     }
//     return uniqueSpecialty
// }, []);

const nameString = users.reduce((total, names)=> total + names.name,[]);
console.log(nameString)

// instructor solution

// let instructors = users.reduce((finalString, user, index) =>{
//     if(index === users.length -1){
//         return`${finalString} ${user.name}.`
//     } else {
//         return `${finalString} ${user.name},`
//     }
// }, "Your instructors are: " );
//
// console.log(instructors);

//fellow student solution
// let usersNames= 'Your instructors are: '  + users.reduce((longEmail, currentUser) =>{
//     return longEmail + currentUser.name + ", ";
// },"");

// bonus - instructor solution

// let uniqueLangs = users.reduce((langList, user) => {
//     for(let lang of user.languages){
//         if(!langList.includes(lang)){
//             langList.push(lang);
//         }
//     }
//     return langList;
// }, []);
// console.log(uniqueLangs);


let sports = ["basketball", "football", "soccer", "volleyball", "cheer", "swimming", "diving"];
let ballSportsFilter = sports.filter((sport) => sport.includes('ball'));
console.log(ballSportsFilter);

let ballSports = sports.reduce((previousValue, currentVal) => {
    if(currentVal.includes("ball")){
        previousValue.push(currentVal);
    }
    return previousValue;
}, [])

console.log(ballSports)
