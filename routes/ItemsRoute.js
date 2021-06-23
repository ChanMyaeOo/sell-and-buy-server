import express from 'express';
import { getItems, createItem, updateItem, deleteItem } from '../controllers/ItemsController.js';

const router = express.Router();

router.get('/', getItems)
router.post('/createItem', createItem)
router.patch('/:id', updateItem)
router.delete('/:id', deleteItem)

export default router;