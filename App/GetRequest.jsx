import React from 'react';
import axios from 'axios';

class GetRequest extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: null,
            title: null,
            author: null
        };
        
    }

    componentDidMount() {
        // Simple GET request using axios
        axios.get('https://www.jalirani.com/files/barstool.json')
            .then(response => this.setState({ id: response.data[0].id}));
       axios.get('https://www.jalirani.com/files/barstool.json')
         .then(response => this.setState({ title: response.data[0].title}));
         axios.get('https://www.jalirani.com/files/barstool.json')
         .then(response => this.setState({ author: response.data[0].author.name}));
    }
    
    

    render() {
        const { id } = this.state;
        const { title } = this.state;
        const { author } = this.state;
       // const { id2 } = this.state.id2;
        return (
            <div className="card text-center m-3">
                <a href="https://www.google.com">{title}</a>
                <div className="card-body">
                    ID: {id}
                    <p></p>
                    Author: {author}
                </div>
            </div>
        );
    }
}

export { GetRequest }; 