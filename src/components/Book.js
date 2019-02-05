import React, { Component } from 'react';
import { Card, Button } from 'reactstrap';

class Book extends Component {
state={
    books:""
}
    handleChange = e => {
        let { name, value } = e.target
        this.setState({ [name]: value })

    }

    render() {

        return (

            <div>
                <div className="leftCol">

                    <Card><b>{this.props.book.title}</b>
                        <i>{this.props.book.subtitle}</i>
                        {this.props.book.author}<br />
                        {this.props.book.publisher}<br />
                        ${(this.props.book.price).toFixed(2)}<br />
                        {this.props.book.pages}&nbsp;pages<br />
                        <a href={`${this.props.book.website}`}>{this.props.book.website}</a>

                        <Button onClick={() => this.props.addBookToCart(this.props.book.id)} >Add To Cart {this.props.book.id}</Button> </Card>
                </div>
            </div>
        );
    }
}

export default Book;