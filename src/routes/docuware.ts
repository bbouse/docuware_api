import express from 'express';
import { fetchDataFromDocuWareController } from '../controllers/docuwareController';

const router = express.Router();

// Define a route to fetch data from DocuWare
router.get('/fetch-docuware-data', fetchDataFromDocuWareController);

export default router;
// routes/yourRoutes.ts
import express from 'express';
import { fetchDataForField } from '../services/YourService';

const router = express.Router();

// Define routes to fetch data for each field
const fields = [
  'RECEIVED',
  'NOTES',
  'SHIPPING_BOL',
  'INVOICE_MATCH_CLOSED',
  'DIRECT_SHIP_INVOICED',
  'DIRECT_SHIP',
  'CONTAINERNUMBER',
  'BILL_OF_LADING',
  'SPECIALPAYTO',
  'VENDORNUMBER',
  'APPROVER',
  'VENDORNAME',
  'TERMS',
  'DOCUMENT_DUE_DATE',
  'DOCUMENT_DATE',
  'INVOICE_AMOUNT',
  'INVOICE_NUMBER',
  'PO_NUMBER',
  'CHECK_NUMBER',
  'DOCUMENT_TYPE',
  'STATUS',
  'DWDOCID',
  'DWSTOREUSER',
  'DWSYS_DOC_URL',
];

fields.forEach((field) => {
  router.get(`/${field.toLowerCase()}`, async (req, res) => {
    const data = await fetchDataForField(field);
    res.status(200).json(data);
  });
});

export default router;