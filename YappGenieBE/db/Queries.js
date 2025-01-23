import dotenv from 'dotenv'; // Import dotenv
dotenv.config(); // Load .env variables

import { generatePodcastMonologue } from './queries.js'; 
const GOOGLE_API = process.env.API_KEY
const { GoogleGenerativeAI } = require("@google/generative-ai");    

const genAI = new GoogleGenerativeAI(GOOGLE_API);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

async function generatePodcastMonologue(textInput) {
    const podcastPrompt = `
        Imagine you're a podcast host. Your tone should be casual, a little shady, engaging, and informative. You're from New York City Brooklyn
        Here's the topic for today's monologue: "${textInput}".
        Please structure the response like a podcast hot take, with an intro, main discussion, and a closing statement. A nice little monologue, no longer than two paragraphs please
    `;

    const result = await model.generateContent(podcastPrompt);
    return result.response.text();
}

module.exports = { generatePodcastMonologue };
