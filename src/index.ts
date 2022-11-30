import express from 'express';
import { engine } from 'express-handlebars';
import path from 'path';

// Import Routes
import IndexRoutes from './routes';
import BooksRoutes from './routes/books';

// Inicializacion
const app = express();
import './database';

// Configuracion
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', engine({
    extname: '.hbs',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    helpers: require('./lib/helpers'),
    defaultLayout: "main"
}));
app.set('view engine','.hbs');

// Archivos estaticos
app.use(express.static(path.join(__dirname, 'public')));

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Rutas
app.use('/', IndexRoutes)
app.use('/books', BooksRoutes);

// Correr servidor
app.listen(app.get('port'), () => {
    console.log(`Servidor corriendo en el puerto ${app.get('port')}`);
});