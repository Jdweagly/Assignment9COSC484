import React from 'react';
import axios from 'axios';


class FirstArticle extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            id: null
        };
        
    }

    componentDidMount() {
        axios.get('https://www.jalirani.com/files/barstool.json')
            .then(response => this.setState({ id: response.data[0].id}));
    }
   

    render() {
        //const { id } = this.state;
        return (
            <div className="card text-center m-3">
                <h5 className="card-header">First Article</h5>
                <div className="card-body">
                    ID: 123
                </div>
            </div>
        );
    }
}

export { FirstArticle }; 