import React from 'react';

class LastReadings extends React.Component {
    render() {
        return (
                <div className="card">
                    <h3 className="card-header text-white bg-secondary">Mes dernières lectures</h3>
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

export default LastReadings;