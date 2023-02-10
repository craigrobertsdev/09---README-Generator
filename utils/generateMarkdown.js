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
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string - did not implement this as the only place the function is called is from renderLicenseSection in the event there is actually a license.
// MIT", "Apache", "MPL", "GPL", "AGPL
function renderLicenseLink(license) {
  const licenses = {
    mit: "https://opensource.org/licenses/MIT",
    apache: "ttps://opensource.org/licenses/Apache-2.0",
    mpl: "https://opensource.org/licenses/MPL-2.0",
    gpl: "https://www.gnu.org/licenses/gpl-3.0",
    agpl: "https://www.gnu.org/licenses/agpl-3.0",
  };
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) return "";
  return `
  # License
  \n\n
  ${renderLicenseBadge(license)}${renderLicenseLink(license)}`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
