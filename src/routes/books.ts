import { Router } from 'express';
import { booksController } from '../controllers/booksController';
const router: Router = Router();

router.get('/', booksController.getBooks);
router.get('/add', booksController.addBooks);
router.post('/add', booksController.addBooksPost);

export default router;