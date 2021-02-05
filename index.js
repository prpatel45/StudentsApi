const express = require('express')
const mongoose = require('mongoose')
const route = require('./routes')

// mongodb+srv://user:<password>@cluster0.qucgm.mongodb.net/<dbname>?retryWrites=true&w=majority
//connect to mongodb 
mongoose.connect("mongodb+srv://user:Prp@12@cluster0.usk10.mongodb.net/student?retryWrites=true&w=majority", { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }).then(
    () => {
        const app = express();
        app.use(express.json())
        app.use(express.urlencoded({ extended: true }));
        app.use("/api", route);
        app.listen(process.env.PORT ||3000, () => {
            console.log("server started....!!");
        })
    }
).catch(
    err => {
        console.log(err.message);
    }
);