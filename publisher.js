const redis = require('redis');
const client = redis.createClient();

client.on("error", (err) => {
    console.log(err);
});

client.publish("channel", "this message sent on node",(e,number)=>{
    console.log(`Message sent ${number} different people`);
});
