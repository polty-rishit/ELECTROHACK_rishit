import { GoogleAuth } from 'google-auth-library';
import axios from 'axios';
import path from 'path';

const DIALOGFLOW_KEY_PATH = process.env.DIALOGFLOW_KEY_PATH || '';
const DIALOGFLOW_PROJECT_ID = process.env.DIALOGFLOW_PROJECT_ID || '';

if (!DIALOGFLOW_KEY_PATH || !DIALOGFLOW_PROJECT_ID) {
  throw new Error('Dialogflow key path or project ID is missing.');
}

const sessionClient = async (sessionId: string, query: string, languageCode: string = 'en') => {
  // Authenticate with Google
  const auth = new GoogleAuth({
    keyFile: path.resolve(DIALOGFLOW_KEY_PATH),
    scopes: ['https://www.googleapis.com/auth/cloud-platform'],
  });

  const client = await auth.getClient();
  const token = await auth.getAccessToken();

  const endpoint = `https://dialogflow.googleapis.com/v2/projects/${DIALOGFLOW_PROJECT_ID}/agent/sessions/${sessionId}:detectIntent`;

  // Payload for Dialogflow request
  const payload = {
    queryInput: {
      text: {
        text: query,
        languageCode,
      },
    },
  };

  const response = await axios.post(endpoint, payload, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

export default sessionClient;