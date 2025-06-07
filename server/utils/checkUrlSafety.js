import axios from "axios";
import dotenv, { config } from 'dotenv'
dotenv.config();
 
const API_KEY =  process.env.API_KEY ;
export async function isUrlSafe(url) {
    const body = {
        client: { clientId: "link-app", clientVersion: "1.0" },
        threatInfo: {
            threatTypes: ["MALWARE", "SOCIAL_ENGINEERING", "UNWANTED_SOFTWARE"],
            platformTypes: ["ANY_PLATFORM"],
            threatEntryTypes: ["URL"],
            threatEntries: [{ url }]
        }
    };

    try { 
        const response = await axios.post(
            `https://safebrowsing.googleapis.com/v4/threatMatches:find?key=${API_KEY}`,
            body
        );
        return !(response.data && response.data.matches);
    } catch (error) {
        console.error("Safe Browsing API error:", error.message, error.response?.data); // Log error details
        return false;
    }
}  