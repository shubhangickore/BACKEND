const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

//to parse (understand) the incoming data.
app.use(express.urlencoded({extended :true}));


app.set("view engine" , "ejs");
app.set("views" , path.join(__dirname , "views"));

app.use(express.static(path.join(__dirname , "public")));

let posts = [
    {   
        id:"1a",
        username :"shubhangi kore",
        content :"I love Coding"
    },
    {   
        id:"2b",
        username :"shiva",
        content :"I love Learning Autocad"
    },

    {  
        id:"3c",
        username:"Ishu",
        content :"I love Dancing"
    },
];


app.get("/posts", (req,res) =>{
    res.render("index.ejs" ,{ posts });
});

app.get("/posts/new", (req,res)=>{
    res.render("new.ejs");
}); 

app.post("/posts", (req,res)=>{
   let {username , content} = req.body;
   posts.push({username , content});
    res.redirect("/posts");
});

app.get("/posts/:id",(req,res)=>{
    let {id} = req.params;
    let post = posts.find((p)=>id === p.id)
    res.render("show.ejs",{post});
})

app.listen(port , ()=>{
    console.log(`listening to the port ${port}`);
});


