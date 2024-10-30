import mongoose from 'mongoose'

const taskSchema = new mongoose.Schema(
    {
        title:{
            required:true,
            unique:true,
            type:String
        }


},
{
    timestamps:true
})

const Task = mongoose.model("Task",taskSchema)
export default Task