import React from 'react';
import axios from 'axios';

class FirstArticle extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: null,
            title: null,
            author: null,
            url: null,
            comment_count: null
        };
        
    }

    componentDidMount() {
        // Simple GET request using axios
        axios.get('https://www.jalirani.com/files/barstool.json') //id
            .then(response => this.setState({ id: response.data[0].id}));
        axios.get('https://www.jalirani.com/files/barstool.json') //title
            .then(response => this.setState({ title: response.data[0].title}));
        axios.get('https://www.jalirani.com/files/barstool.json') //author
            .then(response => this.setState({ author: response.data[0].author.name}));
        axios.get('https://www.jalirani.com/files/barstool.json') //url
            .then(response => this.setState({ url: response.data[0].url}));
        axios.get('https://www.jalirani.com/files/barstool.json') //comment_count
            .then(response => this.setState({ comment_count: response.data[0].comment_count}));
    }
    
    

    render() {
        const { id } = this.state;
        const { title } = this.state;
        const { author } = this.state;
        const { url } = this.state;
        const { comment_count } = this.state;
       // const { id2 } = this.state.id2;
        return (
            <div className="card text-center m-3">
                <a href={url}>{title}</a>
                <div className="card-body">
                <img src="https://www.w3schools.com/images/w3schools_green.jpg" alt="An image"/>
                    <p></p>
                    ID: {id}
                    <p></p>
                    Author: {author}
                    <p></p>
                    Comment Count: {comment_count}
                    
                </div>
            </div>
        );
    }
}

export { FirstArticle }; 