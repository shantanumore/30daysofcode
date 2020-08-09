let bodyParser = require('body-parser');
let mongoose = require('mongoose');


//connect to database
mongoose.connect('mongodb+srv://test:test@todo.c7fcx.mongodb.net/todo?retryWrites=true&w=majority');

//create a schema - blueprint
let todoSchema = new mongoose.Schema({
   item: String
});

//create model
let Todo = mongoose.model('Todo', todoSchema);

// let itemOne = Todo({item: 'buy flowers' }).save(function(err){
//     if(err) throw err;
//     console.log('item saved');
// });


// let data = [
//     {item : 'get milk'}, 
//     {item:'walk dog'} , 
//     {item : 'wash your hands'}
// ];

let urlencoderParser = bodyParser.urlencoded({extended: false});

module.exports = function(app){
     
    app.get('/todo', function(req,res){

        //get data from mongo and pass it to the view
        Todo.find({}, function(err,data){
            if(err) throw err;
            res.render('todo', {todos : data}); 

        });

    });
   
    app.post('/todo',urlencoderParser, function(req,res){
        //get gata from the view and add it to mongo db
        let newTodo = Todo(req.body).save(function(err,data){
                if(err) throw err;
                console.log('item saved');
                res.json(data);
            });
          
    });

    app.delete('/todo/:item',function(req,res){
        //delete the requested item in mongo db
        Todo.find({item: req.params.item.replace(/\-/g," ")}).remove(function(err,data){
            if(err) throw err;
            res.json(data);
        })
        //  data = data.filter(function(todo){
        //      return todo.item.replace(/ /g, '-')!== req.params.item;
        //  });
        //  res.json(data);
    });
   


};