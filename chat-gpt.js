const { Configuration, OpenAIApi } = require("openai");
const fs = require('fs');

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

// Load the data from the JSON file
const jsonData = require('./chat-gpt.json');

// Function to generate Cypress test script for each file
async function generateCypressTestScript(fileName, steps) {
  try {
    const response = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: `write a script in cypress to: ${steps.join('\n')}`,
      temperature: 1,
      max_tokens: 256,
      top_p: 0,
      frequency_penalty: 0,
      presence_penalty: 0,
    });

    // Write the generated script to a file
    fs.writeFile(
      `cypress/e2e/${fileName}.cy.js`,
      response.data.choices[0].text,
      function (err) {
        if (err) throw err;
        console.log(`File ${fileName}.cy.js is created successfully.`);
      }
    );
  } catch (error) {
    if (error.response && error.response.data && error.response.data.error) {
      console.error(`Error generating test script for ${fileName}:`, error.response.data.error);
    } else {
      console.error(`Error generating test script for ${fileName}:`, error);
    }
  }
}

// Iterate through each file name and its steps
for (const fileData of jsonData) {
  const { fileName, steps } = fileData;
  generateCypressTestScript(fileName, steps);
}
