// import { Promise } from 'es6-promise'

const urlweather = 'http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=98875111208701b956a9e50ee6b5d2e0';

// var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function httpGet(url: string): Promise<any> {
    // return await new Promise(resolve => setTimeout(resolve, 1000));
    return new Promise(function (resolve, reject) {
        const request = new XMLHttpRequest();
        request.onload = function () {
            if (this.status === 200) {
                // Success
                // console.log(request.responseText);
                // console.log(this.response);
                setTimeout(() => {
                    resolve(request.responseText);
                }, 5000);
                
            } else {
                // Something went wrong (404 etc.)
                reject(new Error(this.statusText));
            }
        };
        request.onerror = function () {
            reject(new Error('XMLHttpRequest Error: ' + this.statusText));
        };
        request.open('GET', url);
        request.send();
    });
}

/*
httpGet(urlweather2).then(
    function (value) {
        console.log('Contents: ' + (value));
    },
    function (reason) {
        console.error('Something went wrong', reason);
    }
);
*/

/*
// tim hieu
// callback
// lambda expression

function parseResponse(value: string) {
    try {
        return JSON.parse(value);
    } catch (_) {
        return value;
    }
}

function test(){
    console.log("after call the weather");
}

httpGet(urlweather)
    .then(parseResponse)
    .then(trongbug => console.log(trongbug))
    .then(test)
    .catch(function (reason) {
        console.error('Something went wrong - cache: ', reason);
    });
*/

//======================================================
// Wait
//======================================================
// const wait5Secs = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         //resolve(5);
//         httpGet(urlweather);
//             // .then(parseResponse)
//             // .then(data => console.log(data))
//             // .then(test)
//             // .catch(function (reason) {
//             //     console.error('Something went wrong', reason);
//             // });
//     }, 10000);
// });

// const wait5Secs = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // resolve(5);
//         httpGet(urlweather);
//     }, 5000);
// });

/*
const wait5Secs = httpGet(urlweather);
wait5Secs.then(data => console.log(data)).catch(err => console.error(err));
*/

// handle error

async function getUser(username: string) {
    const fetch = require("node-fetch");
    try {
      const response = await fetch(
      `https://api.github.com/search/users?q=${username}`
      );
      return await response.json();
    } catch (e) {
      throw e;
    }
  }

  getUser('bob')
    .then(res => console.log(res))
    .catch(err => console.warn(err));