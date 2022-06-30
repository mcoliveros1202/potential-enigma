const generateFile = (templateData) => {
    return `
    # ${templateData.project}
    https://github.com/${templateData.github}

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