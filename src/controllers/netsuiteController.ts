import { Request, Response } from 'express';
import { sendDataToNetSuite } from '../services/netsuiteService'; // Import your NetSuite service

export const sendToNetSuiteController = async (req: Request, res: Response) => {
  try {
    // Your request data may be in the request body or params
    const dataToSend = req.body; // Customize this according to your data structure

    // Call the service to send data to NetSuite
    await sendDataToNetSuite(dataToSend);

    res.status(200).json({ message: 'Data sent to NetSuite successfully' });
  } catch (error) {
    console.error('Error sending data to NetSuite:', error);
    res.status(500).json({ error: 'Failed to send data to NetSuite' });
  }
};
