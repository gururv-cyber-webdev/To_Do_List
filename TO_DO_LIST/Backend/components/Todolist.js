import mongoose from "mongoose";

//schema and model


    const schema = new mongoose.Schema({
        activity:{
            type:String,
            require:true
        },
        description:{
            type:String,
            require:true
        },
        date:{
            type:String,
            require:true
        }
    })


const List = mongoose.model('List',schema)

export default List