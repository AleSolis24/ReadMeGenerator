// TODO: Include packages needed for this application
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
//this will link to my generate.JS file to create the Readme.md for the user
const generateMarkdown = require('./Generator/Generator');
// TODO: Create an array of questions for user input
const questions = [
    //this is porviding a prompt of array of questions to tell the user to use to generate the ReadMe.md
    {
        type: 'input',
        name: 'github',
        message: 'What is your Github?',
        
    },
    
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
    
    },
    {
        type: 'input',
        name: 'Title',
        message: 'What is your Title to the project',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe your github project',

    }, 
    {
        type: 'input',
        name: 'Usage',
        message: "What do I need to know about this repo?",
    },
    {
        type: 'input',
        name: 'Test',
        message: 'how to test your NPM',
        default: 'NPM run test',

    },
    {
        type: 'input',
        name: 'install',
        message: 'how to install your NPM?',
        default: 'NPM install',

    },
    {
        type: 'input',
        name: 'Effort',
        message: 'How did you contribute in this project?'
    },
    {
        type: 'input',
        name: 'contact',
        message: 'What is the best method to contact you?',
        default: 'Email'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license did you use for this readme?',
        choices: ['MIT', 'GPL'],
    },
];

// TODO: Create a function to write README file
//
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
// this function is creating the prompt/questions to ask the user and once the user has answer all the quesitons it will log "Creating ReadMe.md"
function init() {
    inquirer.prompt(questions).then((inquirerResponses) => {
      console.log('Creating ReadMe.md ..');
      writeToFile('README.md', generateMarkdown({ ...inquirerResponses }));
    });
  }
  

// Function call to initialize app
init();