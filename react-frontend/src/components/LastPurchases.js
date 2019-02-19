import React from 'react';

class LastPurchases extends React.Component {
    render() {
        return (
                <div className="card">
                    <h2 className="card-header text-white bg-primary">Mes derniers achats</h2>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Premier titre <span className="font-italic">par Bob Moore</span></li>
                        <li className="list-group-item">Deuxième titre vol. 1 <span className="font-italic">par Alan Moore</span></li>
                        <li className="list-group-item">Troisième titre vol. 2 <span className="font-italic">par Paul Moore</span></li>
                        <li className="list-group-item">Quatrième titre vol. 3 <span className="font-italic">par Bill Moore</span></li>
                    </ul>
              </div>
        )
    }
}

export default LastPurchases;