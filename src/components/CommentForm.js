import React, {Component} from 'react'

const formStyle = {
    textAlign: 'center'
}

const inputStyle = {
    width: '50%',
    height: '20px',
    margin: '20px 0 10px 0',
    padding: '5px'
}

const textareaStyle = {
    width: '50%',
    minHeight: '60px',
    padding: '5px'
}

const buttonStyle = {
    padding: '10px 15px',
    margin: '10px 0'
}

class CommentForm extends Component {

    state = {
        username: '',
        comment: '',
        isValidUsername: true,
        isValidComment: true
    }

    handleUsernameChange = ev => {
        this.state.isValidUsername = true
        const val = ev.target.value
        if (val.length > 30) {
            return
        }
        this.setState({
            username: val
        })
    }

    handleCommentChange = ev => {
        this.state.isValidComment = true
        const val = ev.target.value
        if (val.length > 150) {
            return
        }
        this.setState({
            comment: val
        })
    }

    handleSubmit = () => {
        if (this.state.username.length < 10) {
            this.setState({
                isValidUsername: false
            })
        }
        if (this.state.comment.length < 30) {
            this.setState({
                isValidComment: false
            })
        }
        if (!this.state.isValidComment || !this.isValidUsername) {
            return
        }
    }

    render() {
        return (
            <div style={formStyle}>
                <input type="text" className={this.state.isValidUsername ? '' : 'invalid'} style={inputStyle} placeholder="Username" value={this.state.username} onChange={this.handleUsernameChange} />
                <br/>
                <textarea className={this.state.isValidComment ? '' : 'invalid'} style={textareaStyle} placeholder="Enter your comment..." value={this.state.comment} onChange={this.handleCommentChange} />
                <br />
                <button style={buttonStyle} onClick={this.handleSubmit}>Submit</button>
            </div>
        )
    }
}

export default CommentForm
