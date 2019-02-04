import React, { Component } from 'react';
import axios from 'axios'

class CreateBook extends Component {
    state = {
        book: {
            title: '' ,
            bookPic: '',
            author: '',
            description: '',
        }
    }

    handleChange = (event) => {
        const newState = { ...this.state.book }
        newState[event.target.name] = event.target.value
        this.setState({ book: newState })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const payload = this.state.book
        axios.post('/api/books', payload)
        .then((res) => {
            this.props.getAllbooks()
            this.props.toggleCreateBook()
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input type="text"
                        placeholder="title"
                        name="title"
                        value={this.state.book.title}
                        onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <input type="text"
                        placeholder="author"
                        value={this.state.book.author}
                        onChange={this.handleChange}
                        name="author"/>
                    </div>
                    <div>
                        <input type="text"
                        placeholder="description"
                        value={this.state.book.description}
                        onChange={this.handleChange}
                        name="description"/>
                    </div>
                    <div>
                        <input type="text"
                        placeholder="cover"
                        value={this.state.book.bookPic}
                        onChange={this.handleChange}
                        name="cover"/>
                    </div>
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default CreateBook;