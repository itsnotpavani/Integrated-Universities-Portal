const mongoose = require('mongoose')

const blogSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type: String,
        required:true
    },
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref: 'User'
    },
    views:{
        type: Number,
        default:0
    }
    
},{
    timestamps:true
})


const Blog = mongoose.model('Blog',blogSchema)
module.exports = Blog