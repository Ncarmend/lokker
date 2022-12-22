import Express from "express";
import pkg from "pg";
import bodyParser from "body-parser";
import dbconnect from "./dbconnect/dbconnect.mjs";
import client from "./dbconnect/client.mjs";


import * as dotenv from "dotenv";
//import Cors from "cors"
/*const corsOptions = {
    origin: "http://localhost:8081"
  };*/

dotenv.config();

//const { Client } = pg;

const app = Express();
//const pg = pg;
//const cors = cors;
const port = 3009;

dbconnect();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(Express.static('public'));
//app.use(client.pkg)
//"devStart":nodemon index.js
app.listen(port, () => {
    console.log(`App is listening nnnn on port ${port}`);
});


app.get('/register', (req, res) => {
    //res.sendFile(__dirname + '/public/index.html')
    res.render('register.js', { email: 'email' }, { password: 'password' })
})
app.get('/login', (req, res) => {
    res.render('login.js')
})

app.get('/')
app.post('/registerPost', (req, res) => {
    try {
        const hashedPassword = bcrypt.hash(req.body.password, 10)
        user.push({
            email: req.body.email,
            password: hashedPassword

        })
        res.redirect('/login')

    } catch {
        res.redirect('/register')
    }
})

app.post('/login', (req, res) => {
    req.body.email
})

