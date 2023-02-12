// Returns the link to license badge based on user selection
function renderLicenseBadge(license) {
  if (license === "None") return "";
  const licenses = {
    mit: "https://img.shields.io/badge/License-MIT-yellow.svg",
    apache: "https://img.shields.io/badge/License-Apache_2.0-blue.svg",
    mpl: "https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg",
    gpl: "https://img.shields.io/badge/License-GPLv3-blue.svg",
    agpl: "https://img.shields.io/badge/License-AGPL_v3-blue.svg",
  };
  return `[![License](${licenses[license.toLowerCase()]})]`;
}

// returns the link to the selected license web page
function renderLicenseLink(license) {
  if (license === "None") return "";
  const licenses = {
    mit: "https://opensource.org/licenses/MIT",
    apache: "https://opensource.org/licenses/Apache-2.0",
    mpl: "https://opensource.org/licenses/MPL-2.0",
    gpl: "https://www.gnu.org/licenses/gpl-3.0",
    agpl: "https://www.gnu.org/licenses/agpl-3.0",
  };
  return `(${licenses[license.toLowerCase()]})`;
}

// returns either nothing if no license is selected, or the complete markdown for the license section of the readme.
function renderLicenseSection(license) {
  if (license === "None") return "";
  return `## License
  
  This project is licensed under the ${license} license. See [here]${renderLicenseLink(license)} for more info.`;
}

// Generates entire markdown for README.
// data is an object containing all responses to the question prompts from running node index
// each section is responsible for creating the space below it to the next section.
function generateMarkdown(data) {

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
  
  let tableOfContents = generateToC(data);

  const description = `## Description
  ${data.description}
  
  `;

  const installation = `## Installation
  ${data.install}
  
  `;

  let usage = `## Usage
  ${data.usage}
  
  `;

  if (data.screenshot) {
  usage += `<p align="center">
  <img src="${data.github}${data.screenshot}">
  </p>

  `;
  }

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

  return title + tableOfContents + description + installation + usage + contributing + testing + questions + license;

}

function generateToC(data) {
  let toc =
  `## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  `;

  // if there are tests - add the ToC link 
  if (data.tests) {
    toc += `- [Testing](#testing)
  `
  }

  // always add questions section
  toc += `- [Questions](#questions)
  `;

  // deal with license here if applicable
  if (data.license) {
    toc += `- [License](#license)
  
  `;
  } else {
    // if no license, add extra line breaks
    toc += `
  
  `;
  }

  return toc;
}

module.exports = generateMarkdown;
