import React, {Component} from 'react'
import Comment from './Comment'
import PropTypes from 'prop-types'

class CommentList extends Component {
	static propTypes = {
		onDeleteComment: PropTypes.func,
		comments: PropTypes.array
	}
	static defaultProps = {
		comments: []
	}

	componentWillMount() {
		console.log(this.props)
	}

	handleDeleteComment(index) {
		if (this.props.onDeleteComment) {
			this.props.onDeleteComment(index)
		}
	}

	render() {
		return (
			<div>
				{this.props.comments.map((comment, index) => {
					return (
						<Comment
							comment={comment}
							onDeleteComment={this.handleDeleteComment.bind(this)}
							index={index}
							key={index}/>
					)
				})}
			</div>
		)
	}
}

export default CommentList
