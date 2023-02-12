const inquirer = require("inquirer");
const fs = require("fs");
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

// Runs through the list of questions using the Inquirer module
function inquire() {
  return inquirer.prompt(questions);
}

// Confirms that the user has entered the required information
function validateInput(answer) {
  if (answer) return true;
  return "Please enter an input";
}

// Writes the generated Markdown to the /assets/README folder
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (error) => {
    error ? console.log("There was an error: " + error) : console.log("Success");
  });
}

// Waits for user input, converts username to proper GitHub URL, generates Markdown then writes README file.
async function init() {
  const responses = await inquire();
  responses.github = `https://github.com/${responses.github}/`;
  const markdown = generateMarkdown(responses);
  writeToFile("./assets/ReadMe/README.md", markdown);
}

// Function call to initialize app
init();
