import React from 'react';
import axios from 'axios';

class FirstArticle extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: null,
            img1A: null, //*Wink Wink* For article thumbnail it is image.location + image.thumbnail.small
            img1B: null, //(the url is broken up into two parts) These are the two parts
            author: null, 
            avatar: null, //the author's avatar image
            url: null,
            comment_count: null
        };
        
    }

    componentDidMount() {
        // Simple GET request using axios
        axios.get('https://www.jalirani.com/files/barstool.json') //title
            .then(response => this.setState({ title: response.data[0].title}));
        axios.get('https://www.jalirani.com/files/barstool.json') //img1A
            .then(response => this.setState({ img1A: response.data[0].thumbnail.location}));
        axios.get('https://www.jalirani.com/files/barstool.json') //img1B
            .then(response => this.setState({ img1B: response.data[0].thumbnail.images.medium}));
        axios.get('https://www.jalirani.com/files/barstool.json') //author
            .then(response => this.setState({ author: response.data[0].author.name}));
        axios.get('https://www.jalirani.com/files/barstool.json') //author avatar
            .then(response => this.setState({ avatar: response.data[0].author.avatar}));
        axios.get('https://www.jalirani.com/files/barstool.json') //url
            .then(response => this.setState({ url: response.data[0].url}));
        axios.get('https://www.jalirani.com/files/barstool.json') //comment_count
            .then(response => this.setState({ comment_count: response.data[0].comment_count}));
    }
    
    

    render() {
        const { title } = this.state;
        const { author } = this.state;
        const { avatar } = this.state;
        const { url } = this.state;
        const { comment_count } = this.state;
        const { img1A } = this.state;
        const { img1B } = this.state;
       
        return (
            <div className="card text-center m-3">
                <a href={url}>{title}</a>
                <div className="card-body">
                <img src={img1A + img1B} alt="An image"/>
                    <p></p>
                    Author: 
                    <p></p>
                    <img src={avatar} alt="An image"/> {author}
                    <p></p>
                    Comment Count: {comment_count}
                    <p></p>
                </div>
            </div>
        );
    }
}

export { FirstArticle }; 