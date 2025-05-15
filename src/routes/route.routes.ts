import {log1, log2, log3} from '../middleware/logTemp.middleware'
import express from 'express';

const router = express.Router();
router.get('/', log1,log2, log3);
