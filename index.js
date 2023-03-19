class ChatGPT {
    /**
     * Initializes a new instance of the ChatGPT class.
     * @param {string} access_token The API key to use for the ChatGPT API.
     * @param {Object} options  The options for the model.
     * @param {[]} options.messages The user prompts.
     * @param {string} options.model Which machine learning model to use.
     * @param {number} options.temperature What sampling temperature to use.
     * @param {number} options.top_p An alternative to sampling with temperature.
     * @param {number} options.n How many chat completion choices to generate for each input message.
     * @param {boolean} options.stream Should send partial message deltas?
     * @param {number} options.stop How many tokens to stop the chat completion after.
     * @param {number} options.max_tokens How many tokens to generate for each chat completion.
     * @param {number} options.presence_penalty How much to penalize new tokens based on whether they appear in the text so far.
     * @param {number} options.frequency_penalty How much to penalize new tokens based on their existing frequency in the text so far.
     * @param {Object} options.logit_bias Modify the likelihood of specified tokens appearing in the completion.
     * @param {string} options.user A unique identifier representing your end-user.
     * 
     */
    constructor(access_token, options = {}) {
        if (!options.model) {
            options.model = "gpt-3.5-turbo";
        }

        if (!options.messages) {
            options.messages = [{ role: 'system', content: '' }];
        }

        this.access_token = access_token;
        this.options = options;
    }

    /**
     * This function is used to send a message to the ChatGPT API.
     * @param {string} propmt The message to send to the ChatGPT API.
     * @returns {Promise} A promise that resolves to the response from the ChatGPT API.
     * @example
     * const reply = await chatgpt.complete("Hello, how are you?");
     */
    async complete(prompt) {
        this.options.messages.push({ role: 'user', content: prompt });
        const response = await new Promise((resolve, reject) => {
            fetch("https://api.openai.com/v1/chat/completions", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${this.access_token}`
                },
                body: JSON.stringify({
                    ...this.options
                })
            }).then(async (res) => resolve(res.text())).catch((err) => reject(err));
        });
        this.options.messages.push({ role: 'assistant', content: JSON.parse(response).choices[0].message.content });
        return response;
    }
}

if (typeof module !== "undefined") {
    module.exports = ChatGPT;
}