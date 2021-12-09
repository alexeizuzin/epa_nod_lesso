var http = require('http');
var fs = require('fs');
var server = http.createServer(function (req, res) {
    // 1
    var stream = fs.createReadStream(__dirname + '/files/example.txt');
    var writeStream = fs.createWriteStream(__dirname + '/files/example-out.txt');
    stream.pipe(writeStream); // pipe(res)
});
server.listen(8000);
//# sourceMappingURL=task2.js.map