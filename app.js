const redis = require('redis');
const client = redis.createClient();

client.on("error", (err) => {
    console.log(err);
});


//SET
client.set("user_name", "ulas", (err, msg) => {
    if (err) {
        console.log(err);
    }

    console.log("Message", msg);
});

//GET
client.get("user_name", (err, msg) => {
    if (err) {
        console.log(err);
    }

    console.log("Message", msg);
});

//DEL
client.del("user_name", (err, msg) => {
    if (err) {
        console.log(err);
    }

    console.log("Delete", msg);
});

//EXISTS
client.exists("user_name", (err, msg) => {
    if (err) {
        console.log(err);
    }

    console.log("Exists", msg);
});

//APPEND
client.append("last_name", "erkus", (err, msg) => {
    if (err) {
        console.log(err);
    }

    console.log("Append", msg);
    client.get("last_name" , (err,msg)=>{
        console.log(msg);
    });
});

/*  
  Use below command to try
  PUBLISH channel [message] 
*/

client.on("message",(chan,msg)=>{
   console.log(`${chan} adlı kanaldan ${msg} gönderildi.`);
});

client.subscribe("channel");

