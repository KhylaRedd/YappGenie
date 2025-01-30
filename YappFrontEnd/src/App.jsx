import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
    const [topic, setTopic] = useState(''); // State for the topic input
    const [monologue, setMonologue] = useState(''); // State for the generated monologue
    const [isPlaying, setIsPlaying] = useState(false); // State to track if speech is playing

    // Define handleGenerate function
    const handleGenerate = async () => {
        if (!topic) return alert('Please enter a topic!'); // Prevent empty input
        try {
            // Send POST request to your backend with the topic
            const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/generate`, { topic });

            // Save the response to display it
            setMonologue(response.data.podcast);

            // Use native speech synthesis if it's available
            if ('speechSynthesis' in window) {
                const utterance = new SpeechSynthesisUtterance(response.data.podcast);
                utterance.voice = speechSynthesis.getVoices().find(voice => voice.name === "Google UK English Female"); // Choose voice (optional)
                speechSynthesis.speak(utterance); // Speak the podcast
                setIsPlaying(true); // Set isPlaying to true when speech starts
            } else {
                alert('Speech synthesis is not supported in your browser.');
            }
        } catch (error) {
            console.error('Error generating monologue:', error);
            alert('Failed to generate the monologue. Please try again.');
        }
    };

    // Handle stopping the speech
    const handleStop = () => {
        if (speechSynthesis.speaking) {
            speechSynthesis.cancel(); // Stop the speech
            setIsPlaying(false); // Update the state
        }
    };

    // Handle restarting the speech
    const handleRestart = () => {
        if (monologue) {
            const utterance = new SpeechSynthesisUtterance(monologue);
            speechSynthesis.speak(utterance); // Restart the speech
            setIsPlaying(true); // Update the state to reflect that speech is playing
        }
    };

    return (
        <div className="bodyy" style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1>🎙️ Yapp Genie</h1>
            <div style={{ marginBottom: '10px' }}>
                <input
                    type="text"
                    placeholder="Let's talk.."
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    style={{
                        padding: '8px',
                        
                        width: '300px',
                        border: '1px solid #ccc',
                        borderRadius: '4px',
                    }}
                />
                <button onClick={handleGenerate}>Ready to Yapp</button>
            </div>
            {monologue && (
                <div>
                    <h2>📝 Here me out...</h2>
                    <p
                        style={{
                            backgroundColor: '#f9f9f9',
                            padding: '10px',
                            borderRadius: '4px',
                            border: '1px solid #ddd',
                        }}
                    >
                        {monologue}
                    </p>
                </div>
            )}

            <div style={{ marginTop: '20px' }}>
                <button onClick={handleStop} disabled={!isPlaying}>Stop</button>
                <button onClick={handleRestart} disabled={isPlaying || !monologue}>Restart</button>
            </div>
        </div>
    );
};

export default App;
