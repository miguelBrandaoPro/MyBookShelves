import Books from '../datas/Books.js';

class BookService {
    all(callback) {
        callback(Books.books);
    }
}

export default BookService;