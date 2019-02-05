import React, { Component } from 'react';
import { Container, Row, Card, NavBar, Col } from 'reactstrap'
import TopNavBar from './components/TopNavBar'
import Header from './components/Header'
import Footer from './components/Footer'
import Books from './components/Books'
import BooksFilter from './components/BooksFilter'
import BooksCartList from './components/BooksCartList'
import axios from 'axios'


class App extends Component {

  state = {
    books: [],
    filter: "",
    isLoading: true,
    error: false
  }

  setFilter = filter => {
    this.setState({
      filter
    })
    console.log("filter", filter)
  }

  componentDidMount = async () => {
    try {
      const res = await fetch('http://localhost:8000/books')
      if (!res.ok) {
        throw new Error('Bad request to API')
      }
      const books = await res.json()
     setTimeout(() => {

        this.setState({
          books: books,
          isLoading: false
        })
    }, 2000)
    }

    catch (error) {
      this.setState({ error: true })
    }
  }

  addBookToCart = id => {
    axios.patch(`http://localhost:8000/books/cart/add/${id}`)
      .then(res => {
        let otherBooks = this.state.books.filter(book => id != book.id)
        console.log("APP res data ", res) 
        this.setState({
          books: [...otherBooks, ...res.data]
        })
      })
  }


  
  removeBookFromCart = id => {
    axios.patch(`http://localhost:8000/books/cart/remove/${id}`)
      .then(res => {
        let otherBooks = this.state.books
        console.log("otherBooks res.data", res.data)

        this.setState({
          books: [...otherBooks.filter(book => book.id !== id), res.data]
        })
      })
  }


  render() {

  this.books = this.state.books.filter(book => book.inCart !== true)

   


    return (
      <div className="App">
        <Container className="container-fluid">
          <TopNavBar />

          <Header className="App-header" />
          <div className="columnContainer">
            <Col sm="12" md={{ size: 6, offset: 0 }}>

              {this.state.isLoading ? 'Loading....  5 seconds timeout function running' : <Books books={this.state.books.filter(book => book.inCart === false)} addBookToCart={this.addBookToCart} />}

            </Col>
            <Col sm="12" md={{ size: 4, offset: 0 }}>
              <Card className="rightCol">
                <BooksCartList booksInCart={this.state.books.filter(book => book.inCart == true)} removeBookFromCart={this.removeBookFromCart} /> {/*  */}
              </Card>
            </Col>
          </div>
          <Footer copy='2019' />
        </Container>
      </div>
    );
  }
}

export default App;
