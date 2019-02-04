import React, { Component } from 'react';
import axios from 'axios'
import Edit from './components/Edit'
import Chapter from '/components/Chapter'


class Novel extends Component {
    state = {
        book: {
            chapters: [{}]
        },
        editVisible: false
    }

    componentDidMount() {
        this.getNovel()
    }

    getNovel = () => {
        const bookId = this.props.match.params.bookId
        axios.get(`/api/books/${bookId}`)
            .then((res) => {
                this.setState({ book: res.data })
            })
    }

    deletebook = () => {
        const bookId = this.props.match.params.bookId
        axios.delete(`/api/books/${bookId}`)
            .then(() => this.props.history.goBack())
    }

    toggleEdit = () => {
        this.setState({ editFormVisible: !this.state.editFormVisible })
    }

    createChapter = () => {
        const bookId = this.props.match.params.bookId
        axios.post(`/api/books/${bookId}/${chapterId}`).then((res) => {
            console.log(res.data)
            this.getNovel()
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.book.title}</h1>
                <h2>Author is: {this.state.book.author}</h2>
                <p>Description: {this.state.book.descrition}</p>
                <div><button onClick={this.toggleEdit}>Update your book book</button></div>
                <div>
                    <button onClick={this.createChapter}>Post new Chapter</button>
                </div>
                {this.state.editVisible ? <Edit
                    getNovel={this.getNovel}
                    bookId={this.state.book._id}
                    toggleEdit={this.toggleEdit}
                /> : null}
                <div><button onClick={this.deletebook}>Delete book</button></div>
                    <Chapter book={this.state.book}
                    getNovel={this.getNovel}
                    />
            </div>
        );
    }
}
export default Novel;