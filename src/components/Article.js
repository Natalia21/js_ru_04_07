import React, {Component} from 'react'
import CommentsList from './CommentsList.js'

class Article extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { article, toggleOpen } = this.props
        return (
            <div>
                <h3 onClick = {toggleOpen}>{article.title}</h3>
                {this.getBody()}
            </div>
        )
    }

    getBody() {
        const {article, isOpen} = this.props

        if (!isOpen) return null

        return (
            <div>
                <p>{article.text}</p>
                <CommentsList comments = {article.comments}/>
            </div>
        )
    }
}

export default Article
