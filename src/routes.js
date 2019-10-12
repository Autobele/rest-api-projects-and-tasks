import { Router } from 'express';
import auth from './app/middlewares/auth';
const router = Router();

import {index, store} from './app/controllers/ProjectController'

router.get('/', (req, res) => {res.json({ok: true})});
router.get('/projects', index);
router.post('/projects', store);

export default router;