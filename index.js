const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
// This readme generator requires a response about:

//Title, usage, table of contents, description, installation, usage, license, rules for contributing, tests?, and questions?

// maybe start with radio buttons to choose which of those types you want?

//Title is required, license is from a list of options and added as a new file.

//link is added for github username in the questions sections

//email is added to the questions section

//table of contents has links to different parts of the readme.



// array of questions for user
const questions = [    
    {
    type: 'input',
    message: "What is your project's title?",
    name: 'title',
    validate: function (answer) {
        if (answer.length < 1) {
            return console.log("Enter a valid title");
        }
        return true;
    }
},

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
async function init() {
    const userResponses = await inquirer.prompt(questions);
    console.log("Your responses: ", userResponses);

}

// function call to initialize program
init();
