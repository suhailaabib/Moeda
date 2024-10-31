
import { Router } from 'express';
import {
    store,
    show
} from '../controllers/TransacoesController.js';

const router = Router();

router.get("/", store);
router.get("/:id", show)

export default router;