const express = require('express');
const app = new express();
const register = require('./routes/register');
const login = require('./routes/login');
const upload = require('./routes/upload');
const download = require('./routes/download');

app.use(express.json());
app.use('/register',register);
app.use('/login',login);
app.use('/upload',upload);
app.use('/download',download);

app.get('/',(req,res) => {
    res.send(`
    <h2>With <code>"express"</code> npm package</h2>
    <form action="/upload" enctype="multipart/form-data" method="post">
      <div>Text field title: <input type="text" name="title" /></div>
      <div>File: <input type="file" name="someExpressFiles"  /></div>
      <div>Valid For Times: <input type=text name="validity"  /></div>
      <input type="submit" value="Upload" />
    </form>
  `);
})

const port = process.env.PORT || 3000;
app.listen(port,() => {console.log(`I Am Listening On Port ${port}`)});