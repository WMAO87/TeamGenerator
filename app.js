var inquirer = require('inquirer');
var Profile = require("./constructor");
var generateHTML = require("./generateHTML");
var fs = require('fs');


// create an array to hold ppl objects

var team = [];

function createEmployee() {
    inquirer.prompt([
        {
            type: "input",
            message: "What is your username?",
            name: "name"
        },
        {
            type: "list",
            message: "What is your position?",
            name: "position"
            choices: ["manager", "engineer", "intern"]
        },
        {
            type: "input",
            message: "What is your ID Number?",
            name: "id"
        },
        {
            type: "input",
            message: "What is your email?",
            name: "email"
        }
    ]).then(function (response) {
        switch (response.position) {
             case "manager":
                manager(response.name, response.id, response.email)
                break
             case "engineer":
                engineer(response.name, response.id, response.email)
                 break
             case "intern":
                intern(response.name, response.id, response.email)
                 break
             default:
                 console.log("sorry not a user here")            
        }

    });
}