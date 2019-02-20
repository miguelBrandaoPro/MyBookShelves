import Datas from '../datas/Books.js';
import { concat, sortBy, map, sample } from 'lodash';


class BookService {
    all(callback, count=0) {
        if (count === 0) {
            callback(Datas.books);
        }
        else { 
            callback(Datas.books.slice(0, 5));
        }
    }

    find(bookId) {
        return Datas.books.filter(el => el.isbn === bookId)[0];
    }
}

export default BookService;