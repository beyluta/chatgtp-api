# About

The ChatGPT JavaScript class provides an interface for interacting with the OpenAI `Chat Completion` API. It takes an API access token and an optional set of options for configuring the model and chat behavior. The complete method sends a message to the API and returns the response. The code is designed to be used in a browser environment and can be used to build chatbots or other conversational AI applications.

```javascript
// Require the ChatGPT class
const ChatGPT = require("opeanai-chatgpt-api");

async function chatWithBot() {
  // Instantiate a new ChatGPT object with your API access token
  const chatgpt = new ChatGPT("your_api_access_token_here");

  // Define a user prompt for the chatbot
  const prompt = "Hi, how can I help you today?";

  try {
    // Call the complete method with the prompt
    const response = await chatgpt.complete(prompt);

    // Log the chatbot's response to the console
    console.log(response);
  } catch (error) {
    // Handle any errors that occur
    console.error(error);
  }
}

// Call the chatWithBot function
chatWithBot();
```

## Options

When we instantiate a new ChatGPT object, we pass in the options object as the second parameter along with our OpenAI API access token. This tells the chatbot to use these messages as the initial part of the conversation.


```javascript
// Require the ChatGPT class
const ChatGPT = require('opeanai-chatgpt-api');

async function chatWithBot() {
  // Define options for the ChatGPT model
  const options = {
    messages: [
      { role: 'system', content: 'Welcome to our chatbot!' },
      { role: 'system', content: 'Please enter your name to get started.' },
    ],
  };

  // Instantiate a new ChatGPT object with your API access token and options
  const chatgpt = new ChatGPT("your_api_access_token_here", options);

  // Define a user prompt for the chatbot
  const prompt = "My name is John.";

  try {
    // Call the complete method with the prompt
    const response = await chatgpt.complete(prompt);

    // Log the chatbot's response to the console
    console.log(response);
  } catch (error) {
    // Handle any errors that occur
    console.error(error);
  }
}

// Call the chatWithBot function
chatWithBot();

```

Here is a list of the full range of options available in the ChatGPT class:

### options.messages
- Type: Array
- Required: No
- Default value: [{ role: 'system', content: '' }]
- Description: The user prompts.
### options.model
- Type: string
- Required: No
- Default value: "gpt-3.5-turbo"
- Description: Which machine learning model to use.
### options.temperature
- Type: number
- Required: No
- Description: What sampling temperature to use.
### options.top_p
- Type: number
- Required: No
- Description: An alternative to sampling with temperature.
### options.n
- Type: number
- Required: No
- Description: How many chat completion choices to generate for each input message.
### options.stream
- Type: boolean
- Required: No
- Description: Should send partial message deltas?
### options.stop
- Type: number
- Required: No
- Description: How many tokens to stop the chat completion after.
### options.max_tokens
- Type: number
- Required: No
- Description: How many tokens to generate for each chat completion.
### options.presence_penalty
- Type: number
- Required: No
- Description: How much to penalize new tokens based on whether they appear in the text so far.
### options.frequency_penalty
- Type: number
- Required: No
- Description: How much to penalize new tokens based on their existing frequency in the text so far.
### options.logit_bias
- Type: Object
- Required: No
-Description: Modify the likelihood of specified tokens appearing in the completion.
### options.user
- Type: string
- Required: No
- Description: A unique identifier representing your end-user.

*Note: Default values have been provided where applicable.*