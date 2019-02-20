import React from 'react';
import ListPurchases from './ListPurchases';

class LastPurchases extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
                <div className="card">
                    <h2 className="card-header text-white bg-primary">Mes derniers achats</h2>
                    <ListPurchases count={this.props.count} />
              </div>
        )
    }
}

export default LastPurchases;