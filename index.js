var restclient = require('node-restclient');
const Twit = require('twit'),
  fs = require('fs'),
  path = require('path'),
  config = require(path.join( __dirname, 'config.js') )
const express = require('express');

const app = express();
const router = express.Router();

router.get('/', function(req, res){
  res.sendFile(path.join(__dirname, '/index.html'));
});
app.use('/', router);

let server = app.listen(3000, function(){
  console.log("App server is running on port 3000");
});


T.post(
  "statuses/update", {
    status:"Counter still not working, working on that.\nCongratulations sailor, you made it to Friday!\nhttps://youtu.be/0sqJzq5Rsqk"
  }
)

async function main() {
 

  T.post('statuses/update', {
    status: 'Counter still not working, working on that.\nCongratulations sailor, you made it to Friday!\nhttps://youtu.be/0sqJzq5Rsqk',
  }, function( err, data, response ) {
    console.log( data )
  } );
}

console.log("Starting the bot...");

setInterval(main, 604800)