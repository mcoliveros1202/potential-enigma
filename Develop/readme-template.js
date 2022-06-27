const generateFile = (project, github) => {
    return `
    # ${project}
    https://github.com/${github}

    ## Description
    
    ## Table of Contents
    - [Description](#description)
    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license)
    - [Contribute](#how-to-contribute)
    - [Testing](#testing)
    - [questions](#questions)

    ## Installation

    ## Usage

    ## License

    ## How to Contribute

    ## Testing

    ## Questions



      `;
    };

    module.exports = generateFile;