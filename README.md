1. Khởi tạo node: (4)
    npm init
2. Install express: (5)
    npm i express

    const express = require('express')
    const app = express()
    const port = 3000

    // route 
    app.get('/', (req, res) => {
    res.send('Hello World!')  // arow function 
    })

    app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
    }) //localhost:3000 

//  Lắng nghe sự thay đổi của ứng dụng mà không cần reload lại trang
3. Install nodemon (6)
    npm i nodemon --save-dev

    "script": {
        "start": "nodemon --inspect index.js",
    }

    --inspect: debug ứng dụng

// kiểm tra yêu cầu đến server, để debug
// HTTP logger 
4. Install Morgan (8)
    npm i morgan --save-dev

    const morgan = require('morgan');
    app.use(morgan('combined'));

// Giúp viết các file html đơn giản, gọn gàng, chia layout 
5. Template engine: handlebars (9)
    npm i express-handlebars

    import express from 'express';
    import { engine } from 'express-handlebars';
    const path = required('path');

    const app = express();

    // app sử dụng template engine hbs, định nghĩa hbs 
    app.engine('hbs', engine( {extname: ".hbs"} ));
    app.set('view engine', 'hbs');
    // express hbs set view
    app.set('views', './views');
    app.set('views', path.join(__dirname, 'views'))

    app.get('/', (req, res) => {
        res.render('home');
    });

    app.listen(3000);

    -------------------------------- partialslDir
    {{{body}}}
    {{> header}}
    {{> footer}}

    // config hbs 


6. Static files & SCSS (10)
    app.use(express.static(path.join(__dirname, 'public')));

    npm i node-sass --save-dev 
    "watch": "node-sass --watch src/resources/scss --output src/public/css",

7. Bootstrap 4 (11)
    CDN: async, defer

8. Basic routing (express -> Basic routing)
    handler: function

9. GET & POST 
    queryparameters: sử dụng được ở tất cả các method nhưng thường được dùng ở GET vì POST ... có các phương thức truyền dữ liệu tốt hơn
    GET: lấy dữ liệu req.query -> trả về object, name="q", muốn nhận dữ liệu phía server về client, submit dưới dang queryparameters
    SUBMIT: những thẻ có atribute name khi submit thì sẽ mặc định method GET dưới dạng query 
    POST: muốn gửi dữ liệu phía clien đến server (API), VD: đăng nhập đăng ký, submit dưới dang Form Data, lấy dữ liệu req.body (do express chưa tích hợp)
        app.use(express.urlencoded({extended: true })); // body parser 
        app.use(express.json()); //sử lý dữ liệu gửi bằng js 
    server side rendering 
