const inquirer = require('inquirer');
const fs = require('fs');
const path = require("path");
//const { message } = require('statuses');
const generateMarkdown = require("./utils/generateMarkdown");

// an array of questions for user input
const questions = 
    [
        {
            type: 'input',
            message: "Your Project Title",
            name:'title',
            // Validator for input
            validate: (value)=>{ if(value){return true} else {return 'please input a value to continue'}},
        },
        {
            type:'input',
            message: 'Description of your project?',
            name: 'description',
            validate: (value)=>{ if(value){return true} else {return 'please input a value to continue'}},
        },
        {
            type: 'input',
            message: "How do you install your app?",
            name:'installation',
            validate: (value)=>{ if(value){return true} else {return 'please input a value to continue'}},
        },
        {
            type: 'input',
            message: "How is your app used?",
            name:'usage',
            validate: (value)=>{ if(value){return true} else {return 'please input a value to continue'}},
        },
        {
            type: 'input',
            message: "Please list credits for your app",
            name:'credits',
            validate: (value)=>{ if(value){return true} else {return 'please input a value to continue'}},
        },
        {
            type: 'list',
            message: "Please choose a license",
            choices: ['MIT' , 'Apache2.0' , 'BSD3' , 'None'],
            name:'license',
            validate: (value)=>{ if(value){return true} else {return 'please input a value to continue'}},
        },
        {
            type: 'input',
            message: "Github Username",
            name:'git',
            validate: (value)=>{ if(value){return true} else {return 'please input a value to continue'}},

        },
        {
            type: 'input',
            message: "Tests",
            name:'tests',
            validate: (value)=>{ if(value){return true} else {return 'please input a value to continue'}},
        },
        {
            type: 'input',
            message: "Email",
            name:'email',
            validate: (value)=>{ if(value){return true} else {return 'please input a value to continue'}},
        },

    ];


function writeToFile(README, data) {
    return fs.writeFileSync(path.join(process.cwd(), README), data);
}

function init() {
    inquirer.prompt(questions).then(userResponses => {
        console.log("userResponses", userResponses);
        writeToFile("generatedReadme.md", generateMarkdown({ ...userResponses}));
    });
}

// Function call to initialize app
init();
