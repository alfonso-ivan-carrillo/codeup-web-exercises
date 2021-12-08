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

var longestEmail = users.reduce((total, longest) => {
    let test = 0;
    if ( total[longest] += 1)
    return test;
});

console.log(longestEmail);