import React, {Component} from 'react'

import Remarkable from 'remarkable'

let md = new Remarkable()

class Comment extends Component {
  rawMarkup = () => {
    let rawMarkup = md.render(this.props.children.toString())
    return {__html: rawMarkup}
  }

  render() {
    return <div className="comment">
      <h2 className="commentAuthor">
        {this.props.author}
      </h2>
      <span dangerouslySetInnerHTML={this.rawMarkup()}/>
    </div>
  }
}

export default Comment
