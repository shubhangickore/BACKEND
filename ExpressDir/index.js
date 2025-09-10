const express = require("express");
const app = express();

let port = 3000;

app.listen(port , ()=>{
    console.log(`server is running on port ${port}`);

});
// app.use((req,res) =>{
//     console.log("request received");

app.get("/" , (req,res)=>{
    res.send("this is root response");

});

app.get("/fruits" , (req,res)=>{
    res.send("you contacted fruits path");
});

app.get("/apple",(req,res)=>{
    res.send("you contacted apple path");
});
  //  res.send("this is basic response");
    // res.send({
    //     name:"apple",
    //     color:"red",
    // });
    // let code ="<h1>Fruits</h1><ul><li>apple</li>";
    // res.send(code);

