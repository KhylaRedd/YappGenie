// controller.js
const { generatePodcastMonologue } = require("./queries");
const speech = require("@google-cloud/speech");
const fs = require("fs");

async function generatePodcast(input, isAudio = false) {
    let textInput;

    if (isAudio) {
        // Convert audio to text
        const client = new speech.SpeechClient();
        const audioBytes = fs.readFileSync(input).toString("base64");

        const audio = { content: audioBytes };
        const config = {
            encoding: "LINEAR16",
            sampleRateHertz: 16000,
            languageCode: "en-US",
        };

        const request = { audio, config };
        const [response] = await client.recognize(request);
        textInput = response.results.map((r) => r.alternatives[0].transcript).join(" ");
    } else {
        // Use direct text input
        textInput = input;
    }

    // Call the function from queries.js
    return await generatePodcastMonologue(textInput);
}

async function handleRequest(req, res) {
    try {
        const { input, isAudio } = req.body; // Expecting input data from the user
        const podcastMonologue = await generatePodcast(input, isAudio);
        res.status(200).json({ monologue: podcastMonologue });
    } catch (err) {
        console.error("Error:", err);
        res.status(500).json({ error: "Failed to generate podcast content" });
    }
}

module.exports = { handleRequest };
