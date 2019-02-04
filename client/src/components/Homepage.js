import React, { Component } from 'react';
import axios from 'axios'
import CreateBook from '/components/CreateBook';
import { Link } from 'react-router-dom'

class Homepage extends Component {
    state = {
        books: [{}],
        CreateBookVisible: false
    }

    componentDidMount() {
        this.booklist()
    }

    booklist = () => {
        axios.get(`/api/books`)
        .then((res) => this.setState({ books: res.data }))
    }

    toggleCreateBook = () => {
        this.setState({ CreateBookVisible: !this.state.CreateBookVisible })
    }

    render() {
        return (
            <div>
                <h1>All the currently created books are here</h1>
                <button onClick={this.toggleCreateBook}>Add your book</button>
                {this.state.CreateBookVisible ? <CreateBook
                    booklist={this.booklist}
                    toggleCreateBook={this.toggleCreateBook}
                    /> : null}
                {this.state.books.map((book, i) => (
                    <div key={i}>
                        <Link to={`/books/${book._id}`}><h3>{book.title}</h3></Link>
                    </div>
                ))}
            </div>
        );
    }
}

export default Homepage;