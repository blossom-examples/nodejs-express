# NodeJs Express.js Tutorial Deploy on Blossom

A ready-to-deploy NodeJs Express app to get you started quickly on [Blossom](https://blossom-cloud.com)

A modern web application showcasing Express.js capabilities with a beautiful user interface.

## Features

- Modern, responsive UI built with Tailwind CSS
- Real-time API interactions
- Visual feedback for all actions
- Clean, professional design
- Interactive demo components:
  - Greeting Generator
  - Echo Service
- Error handling and status notifications

## Prerequisites

- Node.js (v14 or higher)
- npm (comes with Node.js)

## Installation

1. Clone this repository
2. Navigate to the project directory
3. Install dependencies:
   ```bash
   npm install
   ```

## Running the Application

### Development Mode (with auto-reload)
```bash
npm run dev
```

### Production Mode
```bash
npm start
```

The server will start on port 3000 by default. You can change this by setting the `PORT` environment variable.

Visit `http://localhost:3000` in your browser to see the demo application.

## Demo Features

### Greeting Generator
- Enter your name in the input field
- Click "Get Greeting" to receive a personalized greeting
- See the response displayed in real-time

### Echo Service
- Enter any message in the text area
- Click "Send Message" to see your message echoed back
- View the complete response including timestamp

## Technical Details

The application is built using:
- Express.js for the backend
- Tailwind CSS for styling
- Vanilla JavaScript for frontend interactions
- Modern async/await API calls

## API Endpoints

The application exposes two API endpoints:

### GET /hello
Returns a greeting message. Optional query parameter:
```
/hello?name=YourName
```

### POST /echo
Echoes back any JSON data sent in the request body.

## Testing the API

You can still test the API endpoints directly using curl:

```bash
# Test the hello endpoint
curl http://localhost:3000/hello
curl http://localhost:3000/hello?name=John

# Test the echo endpoint
curl -X POST -H "Content-Type: application/json" -d '{"message":"Hello World"}' http://localhost:3000/echo
```
