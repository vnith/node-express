// node-modules
import { Router } from 'express';

import api from './api';

const router = Router();

api(router);

export default router;
