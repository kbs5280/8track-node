const express = require('express');
const app = express();

app.get('/', (request, response) => {
  response.send('Hello 8track!');
});

app.listen(8080, () => {
  console.log('8track server is live on port 8080! (http://localhost:8080)');
});
