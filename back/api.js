const mongoose = require('mongoose');
const express = require('express');
const app = express();
const url = 'mongodb://localhost/TodoListV2'
const port = 8081;
const cors = require("cors")
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });
app.use(cors())

app.use(express.urlencoded({extended : true}))
app.use(express.json())

mongoose.connect(url,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}, ()=> {

});
const Schema = mongoose.Schema;

const newTodo = new Schema ({
    name: String,
    id: Number,
    createdAt: String,
    todo: Boolean   
});

let ListTodo = mongoose.model('ListTodo', newTodo);

app.post("/todo", (req,res) => {
    let todoSave = new ListTodo ({name : req.body.name, id: req.body.id, createdAt: req.body.createdAt, todo: req.body.todo});
    todoSave.save()
    res.send('is ok')
})

app.get("/todo", async function (req,res){
    let allTodo = await ListTodo.find()
    res.json(allTodo)
})

app.get("/todo/:id", async (req,res)=>{
    let todoID = await ListTodo.find({id: req.params.id}) 
    res.json(todoID)   
})

app.put("/todo/:id", async (req,res)=>{
    ListTodo.updateOne({id:req.params.id},{$set:{todo:req.body.todo}}, (err, data) => {
        if (err) res.statut(500).json(err)
        else res.json(data)
    })
})

app.delete("/todo/:id", async (req,res)=>{
    try {
        await ListTodo.deleteOne({id:req.params.id})
        res.statut(500).send('is k')
    } catch (error) {
        console.log(error);
        
    }
    

})

app.listen(port, () => {
    console.log('http://localhost:'+port);
})