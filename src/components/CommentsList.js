import React, {Component} from 'react'
import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen'
import CommentForm from './CommentForm'

class CommentsList extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        const {toggleOpen, isOpen} = this.props;

        return (
            <div>
                <button onClick={toggleOpen}>
                    {isOpen ? 'hide' : 'show'} comments
                </button>
                {this.getBody()}
            </div>
        )
    }

    getBody() {
        const {comments, isOpen, articleId} = this.props

        if (!isOpen) return null

        if (!comments || !comments.length) {
            return (
                <div>
                    No comments
                </div>
            )
        }

        const commentElements = comments.map(id => <li key = {id}><Comment id = {id}/></li>)

        return (
            <div>
                <ul>
                    {commentElements}
                </ul>
                <CommentForm articleId = {articleId}/>
            </div>
        )
    }
}

export default toggleOpen(CommentsList)