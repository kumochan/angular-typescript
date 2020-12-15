// import { Promise } from 'es6-promise'
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var urlweather = 'http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=98875111208701b956a9e50ee6b5d2e0';
// var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
function httpGet(url) {
    // return await new Promise(resolve => setTimeout(resolve, 1000));
    return new Promise(function (resolve, reject) {
        var request = new XMLHttpRequest();
        request.onload = function () {
            if (this.status === 200) {
                // Success
                // console.log(request.responseText);
                // console.log(this.response);
                setTimeout(function () {
                    resolve(request.responseText);
                }, 5000);
            }
            else {
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
function getUser(username) {
    return __awaiter(this, void 0, void 0, function () {
        var fetch, response, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    fetch = require("node-fetch");
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, fetch("https://api.github.com/search/users?q=" + username)];
                case 2:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 3: return [2 /*return*/, _a.sent()];
                case 4:
                    e_1 = _a.sent();
                    throw e_1;
                case 5: return [2 /*return*/];
            }
        });
    });
}
getUser('bob')
    .then(function (res) { return console.log(res); })["catch"](function (err) { return console.warn(err); });
