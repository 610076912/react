import React, {Component} from 'react'
import PropType from 'prop-types'

class Comment extends Component {
	static propTypes = {
		comment: PropType.object.isRequired,
		onDeleteComment: PropType.func
	}

	constructor() {
		super()
		this.state = {timeString: ''}
	}

	componentWillMount() {
		this._updateTimeString()
		this.timer = setInterval(
			this._updateTimeString.bind(this),
			10000
		)
	}

	componentWillUnmount() {
		clearInterval(this.timer)
	}

	_updateTimeString() {
		const comment = this.props.comment
		const duration = (+new Date() - comment.createdTime) / 1000
		this.setState({
			timeString: duration > 60
				? `${Math.round(duration / 60)} 分钟前`
				: `${Math.round(Math.max(duration, 1))} 秒前`
		})
	}

	handleDeleteComment() {
		if (this.props.onDeleteComment) {
			this.props.onDeleteComment(this.props.index)
		}
	}

	render() {
		return (
			<div className='comment'>
				<div className='comment-username'>
					<span>{this.props.comment.username} </span>：
				</div>
				<p>{this.props.comment.content}</p>
				<span className='comment-createdtime'>{this.state.timeString}</span>
				<span className="comment-delete" onClick={this.handleDeleteComment.bind(this, this.props.index)}>删除</span>
			</div>
		)
	}
}

export default Comment
