// TODO: Include packages needed for this application
const profileDataArgs = process.argv.slice(2, process.argv.length);

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();

const printReadmeData = profileDataArr => {
    // This...
    for (let i = 0; i < profileDataArr.length; i += 1) {
        console.log(profileDataArr[i]);
    }

    console.log('==================')

    // Is the same as this...
    profileDataArr.forEach(profileItem => console.log(profileItem));
};

printReadmeData(profileDataArgs);