import mongoose from 'mongoose';
import ItemModel from '../models/items.js'

export const getItems = async (req, res) => {
    try {
        const items = await ItemModel.find()
        res.send(items)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const createItem = async (req, res) => {
    const item = req.body;
    const newItem = new ItemModel({ ...item, createdAt: new Date().toISOString() });

    try {
        await newItem.save();
        res.status(201).json(newItem)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

export const updateItem = async (req, res) => {
    const { id: _id } = req.params;
    const item = req.body;

    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).json({ message: "No item found with that ID" })
    const updatedItem = await ItemModel.findByIdAndUpdate(_id, { ...item, _id }, { new: true })
    res.status(201).json(updatedItem)
}