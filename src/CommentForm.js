import React, {Component, PropTypes as t} from 'react'

class CommentForm extends Component {
  static propTypes = {
    onCommentSubmit: t.func.isRequired,
  }

  state = {
    author: '',
    text: '',
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    let author = this.state.author.trim()
    let text = this.state.text.trim()
    if (!text || !author) {
      return
    }
    this.props.onCommentSubmit({author, text})
    this.setState({author: '', text: ''})
  }

  render() {
    return <form className="commentForm" onSubmit={this.handleSubmit}>
      <input
        name="author"
        onChange={this.handleChange}
        placeholder="Your name"
        type="text"
        value={this.state.author}
      />
      <input
        name="text"
        onChange={this.handleChange}
        placeholder="Say something..."
        type="text"
        value={this.state.text}
      />
      <input type="submit" value="Post"/>
    </form>
  }
}

export default CommentForm
