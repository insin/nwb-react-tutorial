import React, {Component, PropTypes as t} from 'react'

import Comment from './Comment'

class CommentList extends Component {
  static propTypes = {
    data: t.array.isRequired,
  }

  render() {
    return <div className="commentList">
      {this.props.data.map(comment =>
        <Comment author={comment.author} key={comment.id}>
          {comment.text}
        </Comment>
      )}
    </div>
  }
}

export default CommentList
