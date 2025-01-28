import dotenv from 'dotenv';//loading the enviorment
import app from './app.js'; 



import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config(); // Load environment variables

const PORT = process.env.PORT || 5000; // Add a fallback port

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

