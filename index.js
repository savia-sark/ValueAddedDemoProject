const express=require('express');
const path=require('path');
const app=express();
//set ejs as the view engine
app.set('view engine', 'ejs');//sufficient for local hosting
app.set('views', path.join(__dirname, 'views'));//required for cloud or github hosting
//route to render ejs template
app.get('/', (req, res) => {
  res.render('index.ejs', { title : 'Ejs App', message: 'Hello from EJS!' });
});
//start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});