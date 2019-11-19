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
            name: "position",
            message: "What is your position?",
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

class Manager extends Profile {
    constructor(name, id, email, num) {
        super(name, "Manager", id, email)
        this.office = num
    }
}
class Engineer extends Profile {
    constructor(name, id, email, num) {
        super(name, "Engineer", id, email)
        this.office = num
    }
}  
class Intern extends Profile {
    constructor(name, id, email, num) {
        super(name, "Engineer", id, email)
        this.office = num
    }
} 
function manager(name, id, email) {
    inquirer.prompt ([{
        type: "input",
        message: "What is your office number?",
        name: "off"
    }])
    .then(function (response) {
        let offNum = response.off
        let user = name
        let idy = id
        let em = email
        let newUser = new Manager (user, idy, em, offNum)
        team.push(newUser)
        howMany();
    })
}
function engineer(name, id, email) {
    inquirer
        .prompt([
            {
                type: "input",
                message: "What is your github username?",
                name: "user"
            }])
        .then(function (response) {
            let usNam = response.user
            let user = name
            let idy = id
            let em = email
            let newUser = new Engineer(user, idy, em, usNam)
            team.push(newUser);
            howMany();
            
        })
} 
function intern(name, id, email) {
    inquirer
        .prompt([
            {
                type: "input",
                message: "What school do you attend?",
                name: "schol"
            }])
        .then(function (response) {
            let schol = response.schol
            let user = name
            let idy = id
            let em = email
            let newUser = new Intern(user, idy, em, schol)
            team.push(newUser);
            howMany();
        })
}
function howMany() {
    inquirer
        .prompt([
            {
                type: "list",
                name: "count",
                message: "Would you like to create another?",
                choices: ["yes", "no"]
            },
        ])
        .then(function (response) {  
            if(response.count === "yes") {         
                createEmployee();
            } else {
                team = JSON.stringify(team);
                 console.log(team);
                 fs.appendFile('index.html', generateHTML(team), function (err) {
                    if (err) throw err;
                    console.log('Saved!');
                  });
            }
        })
}
createEmployee();