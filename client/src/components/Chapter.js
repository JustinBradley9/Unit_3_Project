import React, { Component } from 'react';
import styled from 'styled-components'
import axios from 'axios';



class chapter extends Component {
    state = {
        chapter: {
            title: '',
            chapterNumber: '',
            plot: ''
        }
    }

    handleChange = (event, chapterId) => {
        console.log(chapterId)
        this.props.book.chapters.forEach((chapter) => {
            if(chapterId === chapter._id) {
                // this.setState({chapter: chapter})
                updatedState[event.target.name] = event.target.value
            }
        })
        const updatedState = { ...this.state.chapter }
        this.setState({ chapter: updatedState })
    }

    handleSubmit = (event, chapterId) => {
        event.preventDefault()
        const otherstuff = this.state.chapter
        axios.patch(`/api/chapters/${chapterId}`, otherstuff)
        .then(() => this.props.getNovel)
    }

    deletechapter = (event, chapterId) => {
        event.preventDefault()
        console.log(chapterId)
        axios.delete(`/api/books/${bookId}/chapters`).then(() => {
            this.props.getNovel()
        })
    }

    render() {
        return (
            <div>
                {this.props.book.chapters.map((chapter, i) => (
                        <div onBlur={(event) => this.handleSubmit(event, chapter._id)} key={i}>
                            <button onClick={(event)=> this.deletechapter(event, chapter._id)}>x</button>
                        </div>
                    ))}        
            </div>
        );
    }
}

export default chapter; 