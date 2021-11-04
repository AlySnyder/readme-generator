const inquirer = require('inquirer');
const fs = require('fs');
const { message } = require('statuses');
// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
inquirer.prompt(
    [
        {

            type: 'input',
            message="Your Project Title",
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
            message: 'Please list a Table of Contents for your app',
            name: 'table of contents',
            validate: (value)=>{ if(value){return true} else {return 'please input a value to continue'}},
        },
        {

            type: 'input',
            message="How do you install your app?",
            name:'installation',
            validate: (value)=>{ if(value){return true} else {return 'please input a value to continue'}},


        },
        {

            type: 'input',
            message="How is your app used?",
            name:'usage',
            validate: (value)=>{ if(value){return true} else {return 'please input a value to continue'}},


        },
        {

            type: 'input',
            message="Please list credits for your app",
            name:'credits',
            validate: (value)=>{ if(value){return true} else {return 'please input a value to continue'}},


        },
        {

            type: 'input',
            message="Please input any licenses used for your app",
            name:'license',
            validate: (value)=>{ if(value){return true} else {return 'please input a value to continue'}},


        },
        {

            type: 'input',
            message="Github Username",
            name:'git',
            validate: (value)=>{ if(value){return true} else {return 'please input a value to continue'}},


        },

    ]
)
//const questions = ['Title', 'Description', 'Table of Contents', 'Installation', 'Usage', 'Credits', 'License'];

// TODO: Create a function to write README file
function writeToFile(README, data) {

}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
