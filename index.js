const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
// This readme generator requires a response about:

//Title, usage, table of contents, description, installation, license, rules for contributing, tests?, and questions?

// maybe start with radio buttons to choose which of those types you want?

//Title is required, license is from a list of options and added as a new file.

//link is added for github username in the questions sections

//email is added to the questions section

//table of contents has links to different parts of the readme.



// array of questions for user
const questions = [    
    {
    type: "input",
    message: "What is your project's title?",
    name: "title",
    validate: function (answer) {
        if (answer.length < 1) {
            return console.log("Enter a valid title");
        }
        return true;
    }   
},
{
    type: "input",
    message: "How is your project used? Provide instructions.",
    name: "usage",
    validate: function (answer) {
        if (answer.length < 1) {
            return console.log("Please provide valid instructions on usage.");
        }
        return true;
    }
},
//figure out how to do the table of contents
{
    type: "input",
    message: "Write a description of your project.",
    name: "description",
    validate: function (answer) {
        if (answer.length < 1) {
            return console.log("Please provide a valid description");
        }
        return true;
    }
},    
{
    type: "input",
    message: "What are the steps required to install your project, if needed",
    name: "installation",
    validate: function (answer) {
        if (answer.length < 1) {
            return console.log("Please provide a valid description of the install process.");
        }
        return true;
    }
}, 
{
    type: "list",
    message: "Choose a license for your project.",
    choices: ["Academic Free License v3.0",
        "Apache license 2.0",
        "Artistic license 2.0",
        "Boost Software License 1.0",
        "BSD 2-clause 'Simplified' license",
        'BSD 3-clause "New" or "Revised" license',
        'BSD 3-clause Clear license',
        'Creative Commons license family',
        'Creative Commons Zero v1.0 Universal',
        'Creative Commons Attribution 4.0',
        'Creative Commons Attribution Share Alike 4.0',
        'Do What The F*ck You Want To Public License',
        'Educational Community License v2.0',
        'Eclipse Public License 1.0',
        'Eclipse Public License 2.0',
        'European Union Public License 1.1',
        'GNU Affero General Public License v3.0',
        'GNU General Public License family',
        'GNU General Public License v2.0',
        'GNU General Public License v3.0',
        'GNU Lesser General Public License family',
        'GNU Lesser General Public License v2.1',
        'GNU Lesser General Public License v3.0',
        'ISC',
        'LaTeX Project Public License v1.3c',
        'Microsoft Public License',
        'MIT',
        'Mozilla Public License 2.0',
        'Open Software License 3.0',
        'PostgreSQL License',
        'SIL Open Font License 1.1',
        'University of Illinois/NCSA Open Source License',
        'The Unlicense',
        'zLib License',],
    name: "license"
},   
{
    type: "input",
    message: "What are your rules, if any, for contributing to this project.",
    name: "contributing",
    validate: function (answer) {
        if (answer.length < 1) {
            return console.log("Please provide a valid description for rules of contributing to this project.");
        }
        return true;
    }
},
{
    type: "input",
    message: "Provide any tests for running this application, and how to run them.",
    name: "tests",
    validate: function (answer) {
        if (answer.length < 1) {
            return console.log("Please provide a valid description for how to run tests for this application");
        }
        return true;
    }
},
{
    type: "input",
    message: "What is your GitHub username?",
    name: "username",
    validate: function (answer) {
        if (answer.length < 1) {
            return console.log("A valid GitHub username is required.");
        }
        return true;
    }
},
{
    type: "input",
    message: "What is the name of your GitHub repo?",
    name: "repo",
    validate: function (answer) {
        if (answer.length < 1) {
            return console.log("A valid GitHub repo is required for a badge.");
        }
        return true;
    }
},
{
    type: "input",
    message: "What is an email people can reach you at for questions about this project?",
    name: "email",
    validate: function (answer) {
        if (answer.length < 1) {
            return console.log("Please provide a valid email");
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
