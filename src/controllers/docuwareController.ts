import { Request, Response } from 'express';
import { fetchDataFromDocuWare } from '../services/docuwareService';

// Define a controller function to fetch data from DocuWare
export const fetchDataFromDocuWareController = async (req: Request, res: Response) => {
  try {
    // Call the service to fetch data from DocuWare
    const docuwareData = await fetchDataFromDocuWare();

    // Return the data as JSON response
    res.status(200).json(docuwareData);
  } catch (error) {
    console.error('Error fetching data from DocuWare:', error);
    res.status(500).json({ error: 'Failed to fetch data from DocuWare' });
  }
};
