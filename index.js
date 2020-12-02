const inquirer = require("inquirer");
const fs = require("fs");

inquirer
// begin by gathering the information that will be populated into the readme file.
    .prompt([
        {
            type: "input",
            name: "title",
            message: "Please input your title:"
        },
        {
            type: "input",
            name: "description",
            message: "Please describe your project:"
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
        // license info to go here


    ])