import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
    res.send('is comming...');
})

export default router;