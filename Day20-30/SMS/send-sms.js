const accountSid = "AC5cc927bac402bfa64eef07aec7f1872e";
const authToken = "cf2eb8b7aafbcf347f934f5b4f2b42bf";
const client = require('twilio') (accountSid, authToken);

client.messages.create({
    to: '23059742875',
    from:'+15024439369',
    body:'You are welcome to first node.js. Congrats!'
});