import express from 'express';
import { ingestLog, getLogs } from '../controllers/logs.controller.js';

const router = express.Router();

router.post('/', ingestLog);
router.get('/', getLogs);

export default router;
