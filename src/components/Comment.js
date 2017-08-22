import React, {Component} from 'react'
import { connect } from 'react-redux'
import { commentSelectorFactory } from '../selectors'

class Comment extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { comment } = this.props
        return (
            <div>
                <h3>{comment.user}</h3>
                {comment.text}
            </div>
        )
    }
}

const createMapStateToProps = () => {
    const commentSelector = commentSelectorFactory()

    return (state, ownProps) => ({
        comment: commentSelector(state, ownProps)
    })
}

export default connect(createMapStateToProps)(Comment)
