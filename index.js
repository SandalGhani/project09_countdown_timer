#! /usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var date_fns_1 = require("date-fns");
var response = await inquirer_1.default.prompt([{
        name: "userInput",
        type: "number",
        message: "Please enter the Number of second",
        validate: function (input) {
            if (isNaN(input)) {
                return "Please enter valid Number";
            }
            else if (input > 60) {
                return "Second must be in 60";
            }
            else {
                return true;
            }
        }
    }]);
var input = response.userInput;
function startTime(value) {
    var intTime = new Date().setSeconds(new Date().getSeconds() + value);
    var intervalTime = new Date(intTime);
    setInterval((function () {
        var currentTime = new Date();
        var timeDiff = (0, date_fns_1.differenceInSeconds)(intervalTime, currentTime);
        if (timeDiff <= 0) {
            console.log("Timer has Expired");
            process.exit();
        }
        var min = Math.floor((timeDiff % (3600 * 24)) / 3600);
        var sec = Math.floor(timeDiff % 60);
        console.log("".concat(min.toString().padStart(2, "0"), ":").concat(sec.toString().padStart(2, "0")));
    }), 1000);
}
startTime(input);
