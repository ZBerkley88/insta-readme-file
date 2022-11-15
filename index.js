// TODO: Include packages needed for this application
// allows the user to work with the file system
const fs = require('fs');
const path = require('path');
// inquirer is an npm package that allows a way to gather user input into Node
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a short description explaining the what, why, and how of your project.'
    },
//  This was initially broken down into several questions, the answers to which would be joined together to form a single paragraph. I decided to simplify the process using the prompt above to avoid possible clunky or awkward wording in the finished README.
    // {
    //     type: 'input',
    //     name: 'motive',
    //     message: 'What was the motive behind creating this project?'
    // },
    // {
    //     type: 'input',
    //     name: 'reason',
    //     message: 'Why did you build this project?'
    // },
    // {
    //     type: 'input',
    //     name: 'solve',
    //     message: 'What problem does this project solve?'
    // },
    // {
    //     type: 'input',
    //     name: 'learn',
    //     message: 'What did you learn while working on this project?'
    // },
    {
        // is there a way to create a list of numbered steps? Perhaps create a condition where the program keeps asking for another step until the user indicates that the installation is complete.
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide instructions and examples for use.'
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Who worked with you on this project?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please choose the license used for this project:',
        choices: ['Apache', 'GNU', 'MIT', 'BSD', 'Boost', 'Creative Commons', 'Eclipse', 'Mozilla'],
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Write tests for your application and provide examples on how to run them here.'
    },
    {
        type: 'input',
        name: 'questions',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the best email to contact you?'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('README.md', generateMarkdown(data), (err) =>
        err ? console.error(err) : console.log('Your README file has been successfully generated!')
    );
};

// TODO: Create a function to initialize app
function init() {
    // takes in an array of objects where each question object is asked in sequential order
    inquirer.prompt(questions)
    // user responses are stored in the answer object
    .then(function(answer) {
        // console.log(answer);
        const fileName = answer.title
            
    writeToFile(fileName, answer);
    });
}

// Function call to initialize app
init();

