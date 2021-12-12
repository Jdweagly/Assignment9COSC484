import React from 'react';
import axios from 'axios';

class GetRequest extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            totalReactPackages: null
        };
    }

    componentDidMount() {
        // Simple GET request using axios
        //axios.get('https://www.jalirani.com/files/barstool.json').then(resp => {

   // console.log(resp.data[0].id);
//});
        axios.get('https://www.jalirani.com/files/barstool.json')
            .then(response => this.setState({ totalReactPackages: response.data[0].id}));
            
    }

    render() {
        const { totalReactPackages } = this.state;
        return (
            <div className="card text-center m-3">
                <h5 className="card-header">Simple GET Request</h5>
                <div className="card-body">
                    JSON ID: {totalReactPackages}
                </div>
            </div>
        );
    }
}

export { GetRequest }; 