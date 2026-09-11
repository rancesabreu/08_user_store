import { Router } from 'express';
import { FileUploadService } from '../services/file-upload.service';
import { FileUploadController } from './controller';

export class FileUploadRoutes {
  static get routes(): Router {
    const router = Router();
    const controller = new FileUploadController(new FileUploadService());

    // Definir las rutas
    // api/upload/single/<user|category|product>/
    // api/upload/multiple/<user|category|product>/
    router.post('/single/:type', controller.uploadFile); //obtener todas las categorías
    router.post('/multiple/:type', controller.uploadMultipleFiles); // crear una nueva categoría

    return router;
  }
}
