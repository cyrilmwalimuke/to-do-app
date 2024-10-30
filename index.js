import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import Task from './taskModel.js'
import cors from 'cors'

dotenv.config()

mongoose.connect(process.env.MONGOOSE).then(()=>console.log("succesfully connected to the database")).catch((err)=>console.log("error connecting to the database"))

const app = express()
app.use(express.json())
app.use(cors())
app.get('/',(req,res)=>{
    res.json("hello this is my server")

}
)
app.post('/create',async(req,res)=>{
    const {title} = req.body
    const newTask = new Task({title})
    try {
        await newTask.save()
        res.json('new task')
        
    } catch (err) {
        console.log(err)
        
    }
})


app.get('/get', async(req,res)=>{
    const allTasks =await Task.find({})
res.json(allTasks)
    console.log(allTasks)
})
app.get('/',(req,res)=>{
    res.json({
        message:"welcome to my site",
        success:true
    })
})
app.delete('/delete/:id', async (req,res)=>{
    await Task.findByIdAndDelete(req.params.id)
})
app.listen(3000,()=>{
    console.log("app is running on port 3000")
})