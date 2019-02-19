import React from 'react';
import LastPurchases from './LastPurchases';
import LastReadings from './LastReadings';

class Home extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-8">
                <LastPurchases />
                </div>
                <div className="col-sm">
                <LastReadings />
                </div>
            </div>
        )
    }
}

export default Home;