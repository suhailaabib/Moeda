
import { Router } from 'express';
import {
    store,
    index,
    update
} from '../controllers/usuarioController.js';

const router = Router();

router.post('/', store);
router.get('/', index);
router.put('/:id', update);

export default router;