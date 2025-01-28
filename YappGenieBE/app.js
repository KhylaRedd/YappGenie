import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';


dotenv.config(); // Load environment variables
const app = express();


import { generatePodcastMonologue } from './queries.js';
// Middleware
//app.js holds behavior
app.use(express.json()); // Parse incoming JSON requests
app.use(cors())

// Routes
app.get('/', (req, res) => {
    res.send("Welcome to YappGenie API!");
});

// Example route for generating podcast monologue
app.post('/generate', async (req, res) => {
    const { topic } = req.body; // Expecting { topic: "text" } in request body

    if (!topic) {
        return res.status(400).json({ error: "Topic is required" });
    }

    try {
        const response = await generatePodcastMonologue(topic);
        res.json({ podcast: response });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to generate podcast monologue" });
    }
});

export default app;