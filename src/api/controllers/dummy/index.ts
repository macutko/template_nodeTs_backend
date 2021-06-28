import express from 'express';
import {dummyRequest} from "./getDummyData";

const router = express.Router();

// routes
router.get('/dummyId', dummyRequest);

export default router;
