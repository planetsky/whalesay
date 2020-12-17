//
//
//

const http = require("http");
const url = require("url");
const cowsay = require("cowsay");
const fortune = require("random-fortune")

console.log(cowsay.say({
    text : "Starting...",
    e    : "oO",
    f    : "dragon"
}))

var cow = "whale";

http.createServer(function (req, res) {
    const query = url.parse(req.url,true).query;
    if ( query.cow ) {
        cow=query.cow
    }
    console.log(`cow: ${cow}`)
    res.writeHead(200, {'Content-Type': 'text/plan'});
    res.end(cowsay.think({
        text: fortune.fortune(),
        e   : "oO",
        f   : cow
    }))
}).listen(process.env.PORT || 8888, () => {
    console.log(`Server started and listening on port ${process.env.PORT || 8888}`);
});
