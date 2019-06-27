const express = require('express')
const app = express()

//use swig as templating engine, use to render html files
const swig = require('swig');
app.engine('html', swig.renderFile);

/* Tell swig where to look for templates when one extends another. */
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use('/static', express.static('./static/'));

//change port to 80 when in AWS EC2
const port = 80
 
//app.METHOD(PATH, HANDLER)
// app is an instance of express.
// METHOD is an HTTP request method, in lowercase.
// PATH is a path on the server.
// HANDLER is the function executed when the route is matched.

//match root route
app.get('/', (req, res) => {
    res.render('home');
})


app.get('/youtube', (req, res) => {
    res.render('youtube');
});

app.get('/projects', (req, res) => {
    res.render('projects');
});

app.get('*', (req, res) => {
    res.render('notFound');
  });

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
})