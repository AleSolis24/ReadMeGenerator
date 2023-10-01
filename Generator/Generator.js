// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license)
{

  if (!license) return '';

  return `https://img.shields.io/badge/license-${license}-blue.svg`;
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license) {
    return `https://opensource.org/licenses/${license}/`; // Use correct URL format
  } else {
    return ''; // Return an empty string if there's no license
  }
}

// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `## License
      This project is licensed under the ${license} license.
      
      `;
  }
  return ``;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title}
  [![License Badge](${renderLicenseBadge(data.license)})](${renderLicenseLink(data.license)})
  ## Table of Contents 

* [Title](#Title)

* [Usage](#Usage)

* [Effort](#Effort)

* [Tests](#Tests)

* [Questions](#Questions)

## Install

To install necessary dependencies, run the following command:

\`\`\`
${data.install}
\`\`\`

## Usage

${data.Usage}

${renderLicenseSection(data.license)}
  
## Effort

${data.Effort}

## Test

To run tests, run the following command:

\`\`\`
${data.Test}
\`\`\`

## Questions

If you have any questions about the repo, open an issue or contact me directly at ${
    data.email
  }. You can find more of my work at [${data.github}](https://github.com/${
    data.github
  }/).
`;
}

module.exports = generateMarkdown;