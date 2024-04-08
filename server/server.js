const express = require('express');
const bodyParser = require("body-parser");
const cors = require('cors')
const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());


app.post('/', (req, res)=>{
    const {name, email, phone} = req.body;
    // Using name, email, phone for whatever is needed.
    console.log('Form submitted:', { name, email, phone });
    res.status(200).json({ success: true });

})

app.listen(port, ()=>{
    console.log(`Listening to Port ${port}`);
})  