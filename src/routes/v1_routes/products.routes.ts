
import { Router } from 'express';

const router = Router();

router.get('/',(req, res)=> {
    console.log("Request received for the products");
});

export default router;