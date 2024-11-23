import { NextResponse } from 'next/server'
import * as dialogflow from 'dialogflow'
import { v4 as uuidv4 } from 'uuid'

// Create a Dialogflow session client
const sessionClient = new dialogflow.SessionsClient({
  keyFilename: './path-to-your-dialogflow-key.json', // Path to your service account credentials JSON file
})

export async function POST(request: Request) {
  try {
    const { message } = await request.json()

    // Generate a session ID
    const sessionId = uuidv4()
    const projectId = process.env.DIALOGFLOW_PROJECT_ID;
    if (!projectId) {
      throw new Error('DIALOGFLOW_PROJECT_ID is not defined');
    }
    const sessionPath = sessionClient.projectAgentSessionPath(
      projectId,
      sessionId
    )

    // Create a request to send to Dialogflow
    const requestPayload = {
      session: sessionPath,
      queryInput: {
        text: {
          text: message,
          languageCode: 'en',
        },
      },
    }

    // Send the request to Dialogflow
    const responses = await sessionClient.detectIntent(requestPayload)
    const result = responses[0].queryResult

    // Return the response from Dialogflow
    return NextResponse.json({ reply: result.fulfillmentText })
  } catch (error) {
    console.error('Error:', error)
    return NextResponse.json({ error: 'Failed to communicate with Dialogflow.' })
  }
}