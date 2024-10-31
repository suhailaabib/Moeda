
import { Router } from 'express';
import {
    show
} from '../controllers/CarteiraController.js';

const router = Router();

router.get("/:id", show)

export default router;