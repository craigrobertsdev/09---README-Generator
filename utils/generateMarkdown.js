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
  return `[![License: ${licenses[license]}](${licenses[license.toLowerCase()]})`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string - did not implement this as the only place the function is called in the event there is actually a license.
// MIT", "Apache", "MPL", "GPL", "AGPL
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
  return `${renderLicenseBadge(license)}${renderLicenseLink(license)}`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const license = renderLicenseSection(data.license);
  return `# ${data.title}
${license ? license : ""}

## Description
${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Testing](#testing)
- [Questions](#questions)
- [License](#license)

## Installation
${data.install}

## Usage
${data.usage}${data.screenshot ? "\n\n```md\n![screenshot](" + data.github + data.screenshot + ")" : ""}

## Contributing
${data.contribute}

## Testing
${data.tests}

## Questions
View my other projects at my [GitHub Profile](${data.githib})
For any questions, I can be reached at [${data.email}](${data.email})

# License
${data.license ? "Licensed under the [" + data.license + "](" + renderLicenseLink(data.license) + ")" : "No license applies to this project"}
`;
}

module.exports = generateMarkdown;
