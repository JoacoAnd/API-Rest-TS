import { Request, Response } from 'express';
import Book, { BookInterface } from '../models/Book';

class BooksController {

    public async getBooks(req: Request, res: Response): Promise<void> {
        const books: BookInterface[] = await Book.find().lean();
        
        res.render('books/index', {
            title: "Books",
            books
        });
    }

    public addBooks (req: Request, res: Response): void {
        res.render('books/add', {
            title: 'Add a Book'
        });
    }

    public async addBooksPost (req: Request, res: Response): Promise<void> {
        const { title, author, isbn } = req.body;

        const book: BookInterface = new Book({ title, author, isbn });
        await book.save();

        res.redirect("/books");
    };
}

export const booksController = new BooksController();