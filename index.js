import express from 'express';
import bodyParser from 'body-parser';

const { Client } =  require('pg');  
const client = new Client();
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const query = {
    name: 'fetch-friends',
    text: 'SELECT UNIQUE(f.friend_id)'
};

const PORT = 8080;

app.get('/health', (req, res) => {
    res.sendStatus(200);
});

app.get('/friends/query', (req, res) => {

});

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});