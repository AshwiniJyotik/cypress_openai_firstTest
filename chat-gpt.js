const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const fs = require('fs');
const data = require('./chat-gpt.json');
openai
  .createCompletion({
    model: 'text-davinci-003',
    prompt: `write a script in cypress to: ${data.steps}`,
    temperature: 1,
    max_tokens: 256,
    top_p: 0,
    frequency_penalty: 0,
    presence_penalty: 0,
  })
  .then((response) => {
    fs.writeFile(
      `cypress/e2e/${data.fileName}.cy.js`,
      response.data.choices[0].text,
      function (err) {
        if (err) throw err;
        console.log('File is created successfully.');
      }
    );
  })
  .catch((error) => {
    console.error(error);
  });
