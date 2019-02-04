import React, { Component } from 'react';
import { Card, Button } from 'reactstrap';

class Book extends Component {


    handleChange = e => {
        let { name, value } = e.target
        this.setState({ [name]: value })

    }

    render() {
        console.log("Book", this)
        return (

            <div>
                <div className="leftCol">

                    <Card><b>{this.props.book.title}</b>
                    <i>{this.props.book.subtitle}</i>
                        {this.props.book.author}<br />
                    {this.props.book.publisher}<br />
                        <a href={`${this.props.book.website}`}>{this.props.book.website}</a>  
                        {this.props.book.pages}&nbsp;pages<br />
                      
                    <Button onClick={() => this.props.addBookToCart(this.props.book.id)}>Add To Cart {this.props.book.id}</Button> </Card>
                </div>
            </div>
        );
    }
}

export default Book;