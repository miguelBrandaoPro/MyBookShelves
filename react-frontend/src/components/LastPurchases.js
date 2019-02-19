import React from 'react';

class LastPurchases extends React.Component {
    render() {
        return (
                <div className="card">
                    <h2 className="card-header text-white bg-primary">Mes derniers achats</h2>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Premier titre</li>
                        <li className="list-group-item">Deuxième titre</li>
                        <li className="list-group-item">Troisième titre</li>
                        <li className="list-group-item">Quatrième titre</li>
                    </ul>
              </div>
        )
    }
}

export default LastPurchases;