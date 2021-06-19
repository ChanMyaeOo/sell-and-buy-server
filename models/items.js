import mongoose from 'mongoose';

const itemSchema = mongoose.Schema({ 
    title: String,
    description: String,
    phnumber: String,
    location: String,
    name: String,
    selectedFile: String,
    createdAt: {
        type: Date,
        default: new Date()
    }
})

const ItemModel = mongoose.model('ItemModel', itemSchema)

export default ItemModel