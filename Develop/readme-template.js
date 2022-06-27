const generateFile = (project, github) => {
    return `
    # ${project}
    https://github.com/${github}

    ## Description
    
    ## Table of Contents
    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license)

    ## Installation

    ## Usage

    ## License

    ## How to Contribute

    ## Testing

    ## Questions



      `;
    };

    module.exports = generateFile;