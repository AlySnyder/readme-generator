// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![license](https://img.shields.io/badge/license-${license}-orange.svg)`;
  }
return '';

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Tests](#tests)
* [License](#license)
* [Contributing](#contributing)
* [Credits](#credits)
* [Questions](#questions)

## Installation
${data.installation}

## Usage

${data.usage}

## Tests

${data.tests}

## License

This app is governed by ${data.license} license.

## Contributing

For contributing to the improvements of this project, please contact me via email ${data.email}. You can also find me using my Github handle ${data.git}.

## Credits 

${data.credits}

## Questions

If you have any questions , feel free to reach me via e-mail at ${data.email} For any code related questions or to look at my other projects , check out my Guthub at www.github.com/${data.git}

`;
}

module.exports = generateMarkdown;
