// just setting up a basic server and brining in dependancies..
const express = require('express')
const app = express();
const path = require('path');
const port = process.env.PORT || 5000;
const public = path.resolve('./public')

app.use(express.static('./public'));

app.get('/', (req, res) => {
    res.sendFile(public + '/index.html')
})

app.get("/restaurants/:id", (req,res)=>{
    res.sendFile(public + "/restaurants.html")
})


app.listen(port, () => console.log(`Searching for Rebel Scum at Port ${port}!`))