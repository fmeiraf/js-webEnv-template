import express from 'express';
import path from 'path';
import open from 'open';
import chalk from 'chalk';

const port = 3000;
const server = express();

server.use(express.static('dist'));

server.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
});

server.listen(port, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log(chalk.green('Server is running..'))
        open('http://localhost:' + port);
    }
});


