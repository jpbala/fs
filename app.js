const http = require('http');
const fs = require('file-system');

let file = fs.readFileSync('./pwd.txt', 'utf8');
fs.writeFileSync('./pwd.txt', file + 'new text', 'utf8');

