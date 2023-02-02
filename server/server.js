const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const TodoController = require('./Routes/Todo');
const UserContolller = require('./Routes/User');
require('dotenv').config();

const app = express();
app.use(express.json({limit:"80mb", extended:true}));
app.use(cors());

const PORT = process.env.PORT || 5000;
const Connection_Url=process.env.Connection_Url;
mongoose.connect(Connection_Url).then(()=>{
    app.listen(PORT, (err) => {
        if(!err)
        console.log(`The server running at ${PORT} and DB connected`);
    })
}).catch((err)=>{
    console.log(err)
});
app.use('/user', UserContolller);
app.use('todo',TodoController);