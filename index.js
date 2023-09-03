const path = require('path');
const express = require('express');

const app = express();

app.use('',express.static(path.join(__dirname, 'public')));

app.get('/', (request, response) => {
	return response.sendFile('index.html', { root: '.' });
});

app.get('/login', (request, response) => {
	return response.sendFile('login.html', { root: '.' });
});

app.get('/tools', (request, response) => {
	return response.sendFile('tools.html', { root: '.' });
});

const port = '53134';
app.listen(port, () => console.log(`App listening at http://localhost:${port}`));