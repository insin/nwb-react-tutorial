import './index.css'

import React from 'react'
import {render} from 'react-dom'

import CommentBox from './CommentBox'

render(
  <CommentBox url="/api/comments" pollInterval={2000}/>,
  document.getElementById('app')
)
