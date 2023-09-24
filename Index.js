// TODO: Include packages needed for this application
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./Generator');
// TODO: Create an array of questions for user input
const questions = [
    //this is porviding a prompt to the user to ask for their github username.
    {
        type: 'input',
        name: 'Github',
        message: 'What is your Github?',
    },
    
    {
        type: 'input',
        name: 'email address',
        message: 'What is your email?',
    
    },
    {
        type: 'input',
        name: 'Title',
        message: 'What is your Title to the project',
    },
    {
        type: 'input',
        name: 'Descirbtion',
        message: 'Describe the reason of the project',

    }, 
    {
        type: 'input',
        name: 'github url',
        message: "Provide your github URL",
    },
    {
        type: 'input',
        name: 'test',
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
        name: 'effort',
        message: 'How did you contribute in this project?'
    },
    {
        type: 'input',
        name: 'contact',
        message: 'What is the best method to contact you?',
        default: 'Email'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((inquirerResponses) => {
      console.log('Creating ReadMe.md ..');
      writeToFile('README.md', generateMarkdown({ ...inquirerResponses }));
    });
  }
  

// Function call to initialize app
init();