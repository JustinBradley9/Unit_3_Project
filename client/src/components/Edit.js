import React, { Component } from 'react';
import axios from 'axios'

class Edit extends Component {
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
        const stuff = this.state.book
        const bookId = this.props.bookId
        axios.patch(`/api/books/${bookId}`, stuff)
        .then((res) => {
            this.props.getNovel()
            this.props.toggleEdit()
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

export default Edit;