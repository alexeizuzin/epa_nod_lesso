var fs = require('fs');
const csv = require('csvtojson');
var stream = fs.createReadStream(__dirname + '/csv/example.csv');
var writeStream = fs.createWriteStream(__dirname + '/files/example-out-csv.txt');
stream.pipe(csv()).pipe(writeStream);
//# sourceMappingURL=task1.2.js.map