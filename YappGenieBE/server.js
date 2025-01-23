require('dotenv').config(); // Load .env variables

const express = require('express'); // Import express
const cors = require('cors'); // Import cors for cross-origin resource sharing

const app = express();
const PORT = process.env.PORT || 3000; // Default to 3000 if PORT isn't avalible or defined

// Middleware
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse incoming JSON requests

// Routes
app.get('/', (req, res) => {
    res.send("Welcome to YappGenie API!");
});

// Example route for generating podcast monologue
const { generatePodcastMonologue } = require('./queries'); // Assuming you exported your function
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

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
