const express = require('express');
const { engine } = require('express-handlebars');
const path = require('path');
const app = express();
const morgan = require('morgan');
const port = 3000;

app.use(express.urlencoded({
    extended: true 
})); // body parser 
app.use(express.json()); //sử lý dữ liệu gửi bằng js 

// image, static public
app.use(express.static(path.join(__dirname, 'public')));

//HTTP logger
// app.use(morgan('combined'));

//Template engine
app.engine('hbs', engine({
    extname: ".hbs"
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

app.get('/', (req, res) => {
    res.render('home');
})

app.get('/search', (req, res) => {
    res.render('search');
})

app.post('/search', (req, res) => {
    console.log(req.body)
    res.send();
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});