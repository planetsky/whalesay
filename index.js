//
//
//

var http = require("http");
var cowsay = require("cowsay");
var fortune = require("random-fortune")

console.log(cowsay.say({
    text : "Starting...",
    e    : "oO",
    f    : "dragon"
}))

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plan'});
    res.end(cowsay.think({
        text: fortune.fortune(),
        e   : "oO",
        f   : "whale"
    }))
}).listen(process.env.PORT || 8888, () => {
    console.log(`Server started and listening on port ${process.env.PORT || 8888}`);
});
