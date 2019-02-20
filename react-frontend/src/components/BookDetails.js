import React from 'react';
import BookService from './BookService';

class BookDetails extends React.Component {
    
    state = {
        book: null
    }

    BookService = new BookService();

    componentWillMount() {
        const { bookId } = this.props.match.params;
        this.setState({book: this.BookService.find(bookId)});
    }

    render() {
        return (
            <div className="jumbotron">
                <h1>{this.state.book.title}</h1>
                <p className="font-italic">Par {this.state.book.author}</p>
                <p className="lead">{this.state.book.description}</p>
            </div>
        )
    }
}

export default BookDetails;