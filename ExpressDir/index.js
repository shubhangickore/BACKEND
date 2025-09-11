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


app.get("/:username/:id", (req,res) =>{
    let {username , id } =  req.params ;
    let htmlstr = `<h1> welcome to the page of @ ${username}</h1>`;
    res.send(htmlstr);
});

  //  res.send("this is basic response");
    // res.send({
    //     name:"apple",
    //     color:"red",
    // });
    // let code ="<h1>Fruits</h1><ul><li>apple</li>";
    // res.send(code);

