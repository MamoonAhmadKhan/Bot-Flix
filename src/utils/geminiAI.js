import { getAI, getGenerativeModel, GoogleAIBackend } from "firebase/ai";
import app from "./firebase";

// Initialize the Gemini Developer API backend service
const ai = getAI(app, { backend: new GoogleAIBackend() });

// Create a `GenerativeModel` instance with a model that supports your use case
const model = getGenerativeModel(ai, { model: "gemini-2.5-flash" });


export default model;