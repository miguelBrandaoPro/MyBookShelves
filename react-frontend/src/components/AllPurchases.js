import React from 'react';
import ListPurchases from './ListPurchases';

class AllPurchases extends React.Component {

    render() {
        return (
                <div className="card">
                    <h2 className="card-header text-white bg-primary">Tous mes achats</h2>
                    <ListPurchases />
              </div>
        )
    }
}

export default AllPurchases;