# NodeJs Express.js Tutorial Deploy on Blossom

A ready-to-deploy NodeJs Express app to get you started quickly on [Blossom](https://blossom-cloud.com).

## Quick Start

```bash
# Install dependencies
npm install

# Run the app
npm start
```

Visit `http://localhost:3000` in your browser to see the demo application.

<details>
<summary>Additional Information</summary>

### Environment Variables
- `PORT`: Change the port (default: 3000)

### API Endpoints
```bash
# Get a greeting
curl http://localhost:3000/hello?name=John

# Echo a message
curl -X POST -H "Content-Type: application/json" \
     -d '{"message":"Hello"}' http://localhost:3000/echo
```
</details>
