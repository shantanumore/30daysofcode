let express = require('express');
let todoController = require('./controllers/todocontroller');

let app = express();
 
//setting template engine 
app.set('view engine' , 'ejs');

//static files
app.use(express.static('./public'));

//firecontrollers
todoController(app);

//listen to port
app.listen(3000);
console.log('You are listening to port 3000');



//i am going to use model view controller architecture such that i can store the model
// view and controller file in different folder  