import express from 'express';
import { sendToNetSuiteController } from '../controllers/netsuiteController';

const router = express.Router();

// Define a route to send data to NetSuite
router.post('/send-data-to-netsuite', sendToNetSuiteController);

export default router;
