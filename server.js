const express = require('express');
const hbs = require('hbs');

var app = express();

hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs');

app.use((req, res, next) => {
  var now = new Date().toString();
  console.log(`${now}: ${req.method} ${req.url}`)
  next();
});

// app.use((req, res, next) => {
//   res.render('maintain.hbs');
// });

app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear', () =>{
  return new Date().getFullYear();
});

hbs.registerHelper('welcome', (text) => {
  return text.toUpperCase();
});

app.get('/', (req, res) => {
  res.render('home.hbs', {
    pageTitle: 'Kloud 9',
    welcomeMSG : 'Welcome to Kloud 9'
  })
});

app.get('/about', (req, res) => {
  res.render('about.hbs', {
    pageTitle : 'Kloud 9'
  })
})

app.get('/bad', (req, res) => {
  res.send({
    errorMessage: 'unable to handle request'
  });
});

app.listen(3000, () => {
  console.log('server running on port 3000!')
});
