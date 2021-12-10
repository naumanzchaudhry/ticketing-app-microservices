const express = require('express');
const { json } = require('body-parser');
const app = express();
app.use(json());

app.get('/', (req, res) => {
    res.send('Hello');
})

app.get('/api/users/currentuser', (req, res) => {
    res.send({name: 'Nauman'})
})

app.listen(4500, () => {
    console.log('Auth listening on port 4500');
});