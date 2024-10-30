
import { Router } from 'express';
import {
    store,
    index,
    update
} from '../controllers/expeditionController.js';

const router = Router();

router.post('/', store);
router.get('/', index);
router.put('/:id', update);

export default router;