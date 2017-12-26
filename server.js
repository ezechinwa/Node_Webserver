const express = require("express");
const hbs     = require("hbs");
var app = express();
hbs.registerPartials(__dirname+'/views/partials');
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));
app.use((request,response,next)=>{
    console.log(`${request.app}`);
next();
});
app.get('/', (request,response)=>{
    response.send({
        name : 'williams',
        likes : ['biking', 'women']
    }); 
});

app.get('/about', (request,response)=>{
    response.render('about.hbs',{
        pageTitle : 'About Us',
        footerTitle : '2017'
        
    });
});

app.listen(3000, ()=>{
    console.log("Server is running on port 3000");
});