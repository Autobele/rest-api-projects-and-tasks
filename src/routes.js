import { Router } from 'express';
import auth from './app/middlewares/auth';
const router = Router();

router.get('/', auth, (req, res) => {
    res.send('is comming...');
})

export default router;