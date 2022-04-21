// TODO: Include packages needed for this application
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [];
{
    type: 'input',
    name: 'title',
    message: 'Project Title'
},
{
    type: 'input',
    name: 'Description',
    message: 'Project Description'
},
{
    type: 'list',|
    name: 'license',
    message: 'Choose License Type',
    choices: ['None', 'MIT', 'Apache', 'Boost']
},

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}
return fs.writeFileSync(path.join(process.cwd(), fileName), data)

// TODO: Create a function to initialize app
function init() {}
inquirer.prompt(questions)
.then(userAnswers => {
    console.log('creating your README now')
    writeToFile('NewReadme.md', generateMarkdown({ ...userAnswers }))
})
// Function call to initialize app
init();
