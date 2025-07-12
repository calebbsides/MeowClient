# MeowClient

## Overview

MeowClient is a web-based chat application that allows users to interact with an AI assistant. The chat interface supports sending user messages and receiving responses from a backend AI model.

## Setup

1. Clone this repository
2. Create a `.env` file in the project root with the following content:
   ```env
   VITE_API_URL=http://127.0.0.1:8000/v1/post-message
   ```
3. Start the backend service from the [Pyagent MeowService](https://github.com/calebbsides/Pyagent/tree/MeowService) repository
4. Start the frontend development server

## Build for Production

```
npm run build
```

The output will be in the `dist/` folder, ready to deploy to any static host (Vercel, Netlify, S3, etc).

## Environment Variables

Create a `.env` file for secrets and config:

```
VITE_API_URL=https://your-api-url.com
```

Access with `import.meta.env.VITE_API_URL` in code.

## Linting & Formatting

```
npm run lint
npm run format
```

## Security

See `SECURITY.md` for best practices and recommended HTTP headers.

## Chat Capabilities

- Real-time chat interface with user and model message bubbles
- Maintains chat history within the session
- Displays loading indicators while waiting for responses
- Handles error states gracefully

## Backend Integration

The frontend communicates with a backend service for message processing. The backend is provided by the [Pyagent MeowService](https://github.com/calebbsides/Pyagent/tree/MeowService) repository.

- All chat messages are sent to the backend via a POST request to the endpoint specified in the `.env` file (`VITE_API_URL`)
- The backend processes the chat history and returns a model-generated response
- The backend must be running and accessible at the URL specified in your environment configuration

## Notes

- Ensure the backend is running before sending messages from the chat UI
- You can change the backend endpoint by editing the `.env` file
