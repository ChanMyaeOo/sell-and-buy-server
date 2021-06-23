import express from 'express';
import { getItems, createItem, updateItem } from '../controllers/ItemsController.js';

const router = express.Router();

router.get('/', getItems)
router.post('/createItem', createItem)
router.patch('/:id', updateItem)

export default router;