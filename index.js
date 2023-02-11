// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const markdown = require("./utils/generateMarkdown");
const generateMarkdown = require("./utils/generateMarkdown");

const questions = [
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "github",
    validate: validateInput,
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
    validate: validateInput,
  },
  {
    type: "input",
    message: "What is the title of your project?",
    name: "title",
    validate: validateInput,
  },
  {
    type: "input",
    message: "Provide a short description of your project:",
    name: "description",
    validate: validateInput,
  },
  {
    type: "list",
    message: "What kind of licence does your project have?",
    choices: ["None", "MIT", "Apache", "MPL", "GPL", "AGPL"],
    name: "license",
  },
  {
    type: "input",
    message: "How will someone use your project?:",
    name: "usage",
    validate: validateInput,
  },
  {
    type: "input",
    message: "Add a screenshot? (complete the path to screenshot: https://github.com/username/{path to screenshot})",
    name: "screenshot",
  },
  {
    type: "input",
    message: "What commands should be run to install dependencies?",
    name: "install",
    validate: validateInput,
  },
  {
    type: "input",
    message: "What commands should be run to run tests?",
    name: "tests",
    validate: validateInput,
  },
  {
    type: "input",
    message: "What does the user need to know about contributing to this repo?",
    name: "contribute",
    validate: validateInput,
  },
];

function validateInput(answer) {
  if (answer) return true;
  return "Please enter an input";
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (error) => {
    error ? console.log("There was an error: " + error) : console.log("Success");
  });
}

// TODO: Create a function to initialize app
async function init() {
  const responses = await inquire();
  responses.github = `https://github.com/${responses.github}/`;
  const markdown = generateMarkdown(responses);
  writeToFile("README.md", markdown);
}

// Function call to initialize app
init();

function inquire() {
  return inquirer.prompt(questions);
}
