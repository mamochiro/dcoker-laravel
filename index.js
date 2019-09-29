const express = require("express");
const app = express();
const port = process.env.APP_PORT;


app.get("/" , (req , res ) => res.send("Hellow"));

app.listen(port , () => console.log(`example app listenning on port ${port}!`));