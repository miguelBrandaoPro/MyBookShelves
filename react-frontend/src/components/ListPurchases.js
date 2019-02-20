import React from 'react';
import BookService from './BookService';
import ListPurchaseItem from './ListPurchaseItem';

class ListPurchases extends React.Component {

    constructor(props) {
        super(props);
        this.state = {items: ''};
        this.BookService = new BookService();
    }

    componentWillMount(){
        this.fillData();
    }

    fillData() {
        var thisRef = this;
        this.BookService.all((data)=>{
            thisRef.setState({ items: data });
        }, this.props.count)
    }

    displayItem(){
        if(this.state.items instanceof Array){
          var thisRef = this;
          return this.state.items.map(function(object, i){
              return <ListPurchaseItem obj={object} key={i} />;
          })
        }
    }

    render() {
        return (
            <ul className="list-group list-group-flush">
                {this.displayItem()}
            </ul>
        )
    }
}

export default ListPurchases;