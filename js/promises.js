"use strict";

(function(){

    fetch('https://api.github.com/users/alfonso-ivan-carrillo/events').then(response => response.json())
        .then(data => console.log(data))
        .then(response => console.log(response))
        .catch(error => console.error(error));




    function lastPush(githubUserName){
        fetch(`https://api.github.com/users/${githubUserName}/events`).then(response =>response.json()
            .then(data => {
                let tempArray = data;
                console.log(tempArray);
                for (var i = 0; i < tempArray.length; i++){
                   if (tempArray[i].type === "PushEvent"){
                       console.log(tempArray[i].type + ' created ' + tempArray[i].created_at);
                       break;
                   }
                };
            }))
            .then(response => console.log("resolved")).then(error => console.log("error"));

    }

    lastPush('alfonso-ivan-carrillo');




//    function wait(number) {
//        return new Promise((resolve, reject) =>{
//            setTimeout(()=> {
//                console.log("You'll see this message in " + number + ".");
//            }, number * 1000);
//        })
//    }
//
// wait(2);


    fetch('https://api.github.com/users').then( response => {
        response.json().then( users => {
            users.forEach( user  => {
                // do something with the username login
                console.log(user.login);
            });
        });
    }).then(response => console.log(response))
    .catch(error => console.error(error));


    // const myPromise = new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //         if (Math.random() > 0.5) {
    //             resolve();
    //         } else {
    //             reject();
    //         }
    //     }, 4000);
    // });
    //
    // console.log(myPromise); // a pending promise
    //
    // myPromise.then(() => console.log('resolved!'));
    // myPromise.catch(() => console.log('rejected!'));

    function makeRequest() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() > 0.1) {
                    resolve('Here is your data: ...');
                } else {
                    reject('Network Connection Error!');
                }
            }, 1500);
        });
    }

    const request = makeRequest();
    console.log(request); // pending promise
    request.then(message => console.log('Promise resolved!', message));
// if resolved, will log "Promise resolved!" and "Here is your data: ..."
    request.catch(message => console.log('Promise rejected!', message));
// if rejected, will log "Promise rejected!" and "Network Connection Error!"


    // instructor solutions : below

    // const userLastCommit = (user) => {
    //     fetch(`https://api.github.com/users/${user}/events`, {headers: {'Authorization': `token${GITHUB_KEY}`}})
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data);
    //             for (let event of data)
    //                 if (event.type === "PushEvent") {
    //                     console.log(new Data(event.created_at));
    //                     break;
    //                 }
    //         });
    // }
    //
    // userLastCommit("alfonso-ivan-carrillo");

    // instructor solutions

    // const wait = ms => new Promise(resolve => {
    //     setTimeout(resolve, ms);
    // });
    //
    // wait(1000).then(() => console.log("you promised resoled after 1 second!"))

    const wait = ms => {
        return new Promise(resolve => {
            setTimeout(()=> {
                resolve(`you'll see this after ${ms/1000} seconds.`);
            }, ms);
        })
    }

    wait(1000).then(message => console.log(message));
    wait(3000).then(message => console.log(message));
    wait(5000).then(message => console.log(message));


})();