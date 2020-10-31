import { Router } from 'express';
import multer from 'multer';

import uploadConfig from './config/upload'
import OrphanagesController from './controllers/OrphanagesController';

// import bodyParser from 'body-parser';

const routes = Router();
const upload = multer(uploadConfig);



// routes.use(bodyParser.json());
// routes.use(bodyParser.urlencoded({ extended: true }));

//Orphanages

//Reads
routes.get('/orphanages', OrphanagesController.index);
routes.get('/orphanages/:id', OrphanagesController.show);
//Create
routes.post('/orphanages', upload.array('images'), OrphanagesController.create);
//Update

//Delete


export default routes;