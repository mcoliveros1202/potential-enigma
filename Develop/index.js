// TODO: Include packages needed for this application
const fs = require('fs');
const generateFile = require('./readme-template.js');

const profileDataArgs = process.argv.slice(2);

const [project, github] = profileDataArgs;



fs.writeFile('./README.md', generateFile(project, github), err => {
    if (err) throw new Error(err);

    console.log('README.md complete! Check out README.md to see the output!');
});

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

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