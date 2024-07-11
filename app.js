
const express = require('express');

const path =require('path');




const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'pug');
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));


app.use('/admin',adminRoutes.routes);
app.use(shopRoutes);
app.use((req,res,next)=>{
    res.status(404).render('404');
});




app.listen(3000);