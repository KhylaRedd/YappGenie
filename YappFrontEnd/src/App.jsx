import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
    const [topic, setTopic] = useState(''); // State for the topic input
    const [monologue, setMonologue] = useState(''); // State for the generated monologue

    // Define handleGenerate function
    const handleGenerate = async () => {
        if (!topic) return alert('Please enter a topic!'); // Prevent empty input
        try {
            // Send POST request to your backend with the topic
            const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/generate`, { topic });

            // Save the response to display it
            setMonologue(response.data.podcast);
        } catch (error) {
            console.error('Error generating monologue:', error);
            alert('Failed to generate the monologue. Please try again.');
        }
    };

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1>🎙️ Yapp Genie</h1>
            <div style={{ marginBottom: '10px' }}>
                <input
                    type="text"
                    placeholder="Enter a topic"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    style={{
                        padding: '8px',
                        fontSize: '16px',
                        width: '300px',
                        border: '1px solid #ccc',
                        borderRadius: '4px',
                    }}
                />
                <button onClick={handleGenerate}>
                    Generate Monologue
                </button>
            </div>
            {monologue && (
                <div>
                    <h2>📝 Generated Podcast Monologue:</h2>
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
        </div>
    );
};

export default App;
