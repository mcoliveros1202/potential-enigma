// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateFile = require('./readme-template.js');

const profileDataArgs = process.argv.slice(2);

const [project, github] = profileDataArgs;

// TODO: Create an array of questions for user input

const questions = () => {

    return inquirer .prompt([
    {
        type: 'input',
        name: 'project',
        message: 'What is the title of your project? (Required)',
        validate: projectInput => {
            if (projectInput) {
                return true;
            } else {
                console.log('Please enter the project title!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a brief description of your project. (Required)',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log("Please provide a brief description of your project!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide steps necessary to install your project. (Required)',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log("Please provide steps for project installation!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide instructions for use and examples thereof. (Required)',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log("Please provide instructions for and examples of useage for your project!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'Please provide instructions for how other developers can contribute to your project. (Required)',
        validate: contributionsInput => {
            if (contributionsInput) {
                return true;
            } else {
                console.log("Please provide instructions for how developers may contribute to your project.");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please provide examples of how tests for your project can be run. (Required)',
        validate: testsInput => {
            if (testsInput) {
                return true;
            } else {
                console.log("Examples of tests for your project are needed!");
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please select which license applies to your project. For help selecting a license, please checkout [https://choosealicense.com/]. (Required)',
        choices: ['MIT', 'ISC', 'Apache License 2.0', 'GNU GPLv3', 'CC0-1.0', 'CC-BY-4.0', 'Boost Software License 1.0', 'I choose not to license my project'],
        validate: licenseInput => {
            if (licenseInput) {
                return true;
            } else {
                console.log("Please select one of the listed options!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'username',
        message: 'Please provide your GitHub username. (Required)',
        validate: usernameInput => {
            if (usernameInput) {
                return true;
            } else {
                console.log("Please provide your GitHub username!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please provide your email address for users to reach out with additional questions. (Required)',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log("Please provide your email address!");
                return false;
            }
        }
    }
])
};
questions().then(answers => console.log(answers));

// TODO: Create a function to write README file
// function writeToFile(fileName, data) { }
fs.writeFile('./README.md', generateFile(project, github), err => {
    if (err) throw new Error(err);
});

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();

// const printReadmeData = profileDataArr => {
//     // This...
//     for (let i = 0; i < profileDataArr.length; i += 1) {
//         console.log(profileDataArr[i]);
//     }

//     console.log('==================')

//     // Is the same as this...
//     profileDataArr.forEach(profileItem => console.log(profileItem));
// };

// printReadmeData(profileDataArgs);