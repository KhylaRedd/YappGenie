# Welcome to Yapp Genie!

Yapp Genie is an AI-powered podcast generator that transforms your input into fun, personality-driven hot takes. Get a fresh perspective on any topic, delivered with entertaining and insightful commentary. Listen to your personalized podcast on the go with built-in text-to-speech.

## Features

*   Unique Personality: Yapp Genie puts a fun and engaging spin on any input, delivering hot takes that are entertaining, insightful, and often unexpected.
*   Text-to-Speech Playback: Listen to your personalized podcast take on the go.
*   Accessibility: Designed with text-to-speech in mind, Yapp Genie is accessible to a wide range of users.
*   Real-Time Interaction: Enter a topic, and Yapp Genie instantly generates a witty, fresh perspective with real-time text-to-speech output.
*   Engaging UI: A user-friendly interface makes content creation and interaction smooth and enjoyable.

# Technologies Used
## Backend:

-Express.js: Web framework for building RESTful APIs.
-google/generative-ai (v0.21.0): Machine learning models for generative AI tasks.
-google-cloud/speech (v6.7.0): Google’s Speech-to-Text API.
-Axios (v1.7.9): Promise-based HTTP client for backend requests.
-CORS (v2.8.5): For managing cross-origin requests.

## Frontend:

React (v18.3.1): JavaScript library for building user interfaces.
React DOM (v18.3.1): For rendering React components to the DOM.
Development Tools:

Vite (v6.0.5): A fast build tool for modern web apps.
ESLint (v9.17.0): Static code analysis tool for JavaScript.
@vitejs/plugin-react (v4.3.4): Optimizations for React projects in Vite.
eslint-plugin-react (v7.37.2), eslint-plugin-react-hooks (v5.0.0), eslint-plugin-react-refresh (v0.4.16): ESLint plugins for React.
globals (v15.14.0): Defines global variables for the JavaScript environment.

## Getting Started

### Prerequisites

*  Node.js (version 18 or above)
*  NPM 

### Installation

1.  Clone the repository:

    ```bash
    git clone [https://github.com/KhylaRedd/yapp-genie.git](git clone https://github.com/KhylaRedd/yapp-genie.git)
    ```

2.  Install dependencies:

    ```bash
    npm install
    ```

3.  Set up environment variables: Create a `.env` file in the root directory and add:

    ```
    GOOGLE_API_KEY=<your-google-api-key>
    SECRET_KEY=<your-secret-key-for-authentication>
    ```

4.  Start the app:

    ```bash
    npm run dev
    ```

5.  Navigate to `http://localhost:3000` (or your configured port).

6.  ## Visuals
![Screenshot 2025-02-03 11 56 34 AM](https://github.com/user-attachments/assets/d4b31a39-0883-4acb-8291-2b6b284b1c59)
![Screenshot 2025-02-03 11 57 00 AM](https://github.com/user-attachments/assets/5de11b03-96ea-40cc-a048-e0dae0356e41)
![Screenshot 2025-02-03 11 57 21 AM](https://github.com/user-attachments/assets/bbe2efbb-04d9-4d07-9bb3-e4ddbcb3ac68)

7.   

## Running Tests
```bash
npm test

