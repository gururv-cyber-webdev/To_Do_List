import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import connectdb from './config/Db.js'
import List from './components/Todolist.js'
import cors from 'cors'


dotenv.config()

const app = express()

app.use(express.json())

app.use(cors())

app.listen(process.env.PORT,() => {
    console.log(`listening at port ${process.env.PORT}`)
    connectdb()

})

app.post('/add',async(req,res) => {
    const item = req.body
    console.log(item)
    const list = new List(item)
    

    try{
        await list.save()
        res.status(200).json("List added")
    }
    catch(error){
        res.status(501).json({msg:error.msg})
    }


})


app.get('/list',async(req,res) => {
    const item = await List.find()
    res.json(item)
})

app.delete('/delete',async(req,res) => {
    const item = req.body
    const todo = await List.findOneAndDelete({activity:item.activity})
    res.json(todo)
})