import React from 'react';
import { Link } from 'react-router-dom';

class ListPurchaseItem extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li className="list-group-item"><Link to={`/livres/${this.props.obj.isbn}`} >{this.props.obj.title}</Link> <span className="font-italic">par {this.props.obj.author}</span></li>
        )
    }
}

export default ListPurchaseItem;