// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

const generateMarkdown = require('./utils/generateMarkdown')

const path = require('path')


// Questions array

const questions =[

    {
        type: 'input',
        name: 'project',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a brief description of your project.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide steps necessary to install your project.',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide instructions for use and examples thereof.',
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'Please provide instructions for how other developers can contribute to your project.',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please provide examples of how tests for your project can be run.',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please select which license applies to your project. For help selecting a license, please checkout [https://choosealicense.com/].',
        choices: ['MIT', 'ISC', 'Apache License 2.0', 'GNU GPLv3', 'CC0-1.0', 'CC-BY-4.0', 'Boost Software License 1.0', 'I choose not to license my project'],
},
{
    type: 'input',
        name: 'github',
            message: 'Please provide your GitHub username.',
},
{
    type: 'input',
        name: 'email',
            message: 'Please provide your email address for users to reach out with additional questions.',
}
];

function writeToFile(fileName, data){
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// initialize the app
function init(){
    inquirer.prompt(questions).then((inquirerResponses)=> {
        writeToFile('proREADME.md', generateMarkdown({ ...inquirerResponses}))
    })
}

// Function call to initialize app
init();