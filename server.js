const express=require("express");

const server = express();

server
.use(express.json())
.use(express.urlencoded({ extended: false }))
.use((req, res, next) => {
res.header('Access-Control-Allow-Origin', '*');
res.header('Access-Control-Allow-Headers', '*');
res.header('Access-Control-Allow-Methods', '*');
next();
});



// Definiera en port
const port = 3000;
// Starta servern
server.listen(port, () => {
    console.log(`Servern lyssnar på port ${port}`);
});

server.get("/users",(req,res) =>{
    const db=new sqlite3.Database("./gik339-labb2.db");
    const sql="SELECT * FROM users";
    db.all(sql,(err,rows) => {
        if(err){
            res.send(err);
        }else{
            res.send(rows);
        }
    });
});

const sqlite3=require("sqlite3").verbose();