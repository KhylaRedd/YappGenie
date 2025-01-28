import dotenv from 'dotenv'; // Import dotenv to handle environment variables
dotenv.config(); // Load environment variables
import { GoogleGenerativeAI } from '@google/generative-ai'; // Import necessary modules

const GOOGLE_API = process.env.API_KEY; // Get API key from environment variables
const genAI = new GoogleGenerativeAI(GOOGLE_API); // Initialize Google Generative AI with API key
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' }); // Get the model

// Function to generate a podcast monologue based on a given topic
export async function generatePodcastMonologue(textInput) {
    const podcastPrompt = `
        Imagine you're a podcast host. Your tone should be casual, a little shady, engaging, witty and informative. You're from Brooklyn, NYC 
        Here's the topic for today's monologue: "${textInput}".
        Please structure the response like a podcast hot take, with an intro, main discussion, and a closing statement. nice little monologue no longer than 2 paragraphs  
    `;

    const result = await model.generateContent(podcastPrompt); // Generate content from AI model
    return result.response.text(); // Return the AI-generated text
}

