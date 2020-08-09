import express from 'express';
import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';

const routes = express.Router();
const classesController = new ClassesController;
const connnectionsController = new ConnectionsController;


routes.get('/classes', classesController.index);
routes.post('/classes', classesController.create);


routes.get('/connections', connnectionsController.index);
routes.post('/connections', connnectionsController.create);

export default routes;