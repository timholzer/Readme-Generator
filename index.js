//required packages
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");



// array of questions for user
const questions = [    
    {
        type: "input",
        message: "What do you want to name the readme?",
        name: "fileName",
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Enter a valid title");
            }
            return true;
        }   
    },
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
            return console.log("A valid GitHub repo is required");
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
    fs.writeFile(fileName, data, err => {
        if (err) {
          return console.log(err);
        }
      
        console.log("Readme Generated")
    });
}


//waiting for responses before writing the file
const writeFileAsync = util.promisify(writeToFile);

// function to initialize program
async function init() {
    
    const userResponses = await inquirer.prompt(questions);
    console.log("Your responses: ", userResponses);
    //formatting the responses into a readme
    let formattedUserResponses = (`
    # ${userResponses.title} 
    
    ${userResponses.description}
    \n* [Installation](#Installation)
    \n* [Instructions](#Usage)
    \n* [Contribution](#Contribution)
    \n* [Tests](#Tests)
    \n* [License](#License)
    \n* [Author](#Author)    
    ## Installation
    ${userResponses.installation}
    ## Instructions
    ${userResponses.usage}
    ## Contribution
    ${userResponses.contributing}
    ## Tests
    ${userResponses.tests}
    ## License 
    This project is licensed under the ${userResponses.license} license
    ## Author 
    ## ${userResponses.username} - Email: ${userResponses.email} - GitHub Repo: https://github.com/${userResponses.username}/${userResponses.repo}
    `)

    await writeFileAsync(`${userResponses.fileName}.md`, formattedUserResponses);
}


// function call to initialize program
init();
