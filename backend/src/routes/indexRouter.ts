import express, { Request, Response, Router } from 'express';
import {IndexController} from '../controllers/indexcontrollers';
const router: Router = express.Router();

router.get('/', IndexController.allDatabases);
router.get('/tables/:id', IndexController.allTables);
router.get('/elements/:db/:table', IndexController.allElements);

export default router