import React from 'react';

class ListPurchaseItem extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li className="list-group-item">{this.props.obj.title} <span className="font-italic">par {this.props.obj.author}</span></li>
        )
    }
}

export default ListPurchaseItem;