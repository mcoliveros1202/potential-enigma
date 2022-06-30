// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (licenseInput === 'Apache License 2.0') {
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  } else {
    return 
  }
  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.project} 

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contribute](#how-to-contribute)
  - [Testing](#testing)
  - [questions](#questions)

    ## Description
    ${data.description}

    ## Installation
    ${data.installation}

    ## Usage
    ${data.usage}

    ## License
    ${data.license}

    ## How to Contribute
    ${data.contributions}

    ## Testing
    ${data.tests}

    ## Questions
    ${data.github}
    ${data.email}

`;
}

module.exports = generateMarkdown;
