const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

// midlleware //
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

app.set('views', path.join(__dirname, 'Frontend/views'))
app.use('/static', express.static(path.join(__dirname, 'Frontend/static')))
app.set('view engine', 'ejs')

const colRouter =require('./Backend/routes/colsRoutes');
app.use('/home', colRouter);


const port = 3001 

app.listen(port,() => {
 console.log(`Listening in Port: ${port}`)
 
});