# Express.js Demo Application

A simple Express.js demo application that showcases basic routing and API endpoints.

## Features

- Basic Express.js server setup
- JSON response handling
- Example routes with different HTTP methods
- Error handling middleware
- Query parameter support
- JSON body parsing

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

## Available Endpoints

### GET /
Returns a welcome message and list of available endpoints.

### GET /hello
Returns a greeting message. You can customize the greeting by adding a `name` query parameter:
```
/hello?name=YourName
```

### POST /echo
Echoes back any JSON data sent in the request body.

## Testing the API

You can test the API using curl or any API testing tool like Postman:

```bash
# Test the welcome endpoint
curl http://localhost:3000/

# Test the hello endpoint
curl http://localhost:3000/hello
curl http://localhost:3000/hello?name=John

# Test the echo endpoint
curl -X POST -H "Content-Type: application/json" -d '{"message":"Hello World"}' http://localhost:3000/echo
```
