// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string - did not implement this as the only place the function is called is from renderLicenseSection in the event there is actually a license.
function renderLicenseBadge(license) {
  const licenses = {
    mit: "https://img.shields.io/badge/License-MIT-yellow.svg",
    apache: "https://img.shields.io/badge/License-Apache_2.0-blue.svg",
    mpl: "https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg",
    gpl: "https://img.shields.io/badge/License-GPLv3-blue.svg",
    agpl: "https://img.shields.io/badge/License-AGPL_v3-blue.svg",
  };
  return `[![License](${licenses[license.toLowerCase()]})]`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string - did not implement this as the only place the function is called in the event there is actually a license.
function renderLicenseLink(license) {
  const licenses = {
    mit: "https://opensource.org/licenses/MIT",
    apache: "https://opensource.org/licenses/Apache-2.0",
    mpl: "https://opensource.org/licenses/MPL-2.0",
    gpl: "https://www.gnu.org/licenses/gpl-3.0",
    agpl: "https://www.gnu.org/licenses/agpl-3.0",
  };
  return `(${licenses[license.toLowerCase()]})`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) return "";
  return `## License
  
  This project is licensed under the ${license} license. See [here]${renderLicenseLink(license)} for more info.`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let markdown = "";
  let title = `# ${data.title}
  `;

  // if there is a license, add the badge and link here
  if (data.license) {
  title += `${renderLicenseBadge(data.license)}${renderLicenseLink(data.license)}
  
  `;
  } else {
  // if no license, add an extra line break
  title += `
  
  `;
  }

  let tableOfContents = `## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Testing](#testing)
  - [Questions](#questions)`;

  if (data.license) {
    tableOfContents += `
  - [License](#license)
  
  `;
  } else {
    // if no license, add extra line breaks
    tableOfContents += `
  
  `;
  }

  const installation = `## Installation
  ${data.install}
  
  `;

  let usage = `## Usage
  ${data.usage}
  
  `;

  // if (data.screenshot) {
  //   usage += `<p align="center">
  //   <img src="${data.github}${data.screenshot}">
  //   </p>

  //   `;
  // }

  const contributing = `## Contributing
  ${data.contribute}
  
  `;

  const testing = `## Testing
  ${data.tests}
  
  `;

  const questions = `## Questions
  View my other projects at [${data.github}](${data.github}).

  If you would lke to contact me, I can be reached at [${data.email}](mailto:${data.email}).
  
  `;

  const license = data.license ? renderLicenseSection(data.license) : "";

  markdown = title + tableOfContents + installation + usage + contributing + testing + questions + license;

  return markdown;
}

module.exports = generateMarkdown;
