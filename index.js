const inquirer = require("inquirer");
const fs = require("fs");

inquirer
// begin by gathering the information that will be populated into the readme file.
    .prompt([
        {
            type: "input",
            name: "title",
            message: "Input your title:"
        },
        {
            type: "input",
            name: "description",
            message: "Describe your project:"
        },
        {
            type: "input",
            name: "installation",
            message: "Include any installation instructions:"
        },
        {
            type: "input",
            name: "usage",
            message: "Include any usage information here:"
        },
        {
            type: "list", 
            name: "license",
            message: "Select a license for your project:",
            choices: ["GNU", "Apache", "Berkeley Software Distribution", "MIT"],
        },
        {
            type: "input",
            name: "contribution",
            message: "Are there any contribution guidelines?"
        },
        {
            type: "input",
            name: "test",
            message: "Input test instructions:"
        },
        {
            type: "input",
            name: "github",
            message: "Input your github username:"
        },
        {
            type: "input",
            name: "e-mail",
            message: "Input your e-mail address:"
        },
    ])
    .then(response => {
        console.log(response);
        createReadMe(response);
    })
    .catch(err => {
        console.log(err);
    })
    function createReadMe(response) {
        let readMeContent = "";
        // creating the title
        readMeContent += `# ${response.title}\n`;
        // creating the table of contents
        readMeContent += `\n
        Table of Contents\n
        [Description](#description)\n
        [Installation Instructions](#installation-instructions)\n
        [Usage Information](#usage-information)\n
        [License](#license)\n
        [Contribution Guidelines](#contribution-guidelines)\n
        [Test Instructions](#test-instructions)\n
        [Github Username](#github-username)\n
        [E-mail Address](#e-mail-address)\n`;

        fs.writeFile("readme.md", readMeContent, error => error ? console.log(error) : console.log("Great Success!"));
    }