
const fs = require('fs');
const csv = require('csvtojson');

const stream = fs.createReadStream(__dirname + '/csv/example.csv');
const writeStream = fs.createWriteStream(__dirname + '/files/example-out-csv.txt');

stream.pipe(csv()).pipe(writeStream);
