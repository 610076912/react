import React, {Component} from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'
import wrapWithLoadData from "./wrapWithLoadData";

class CommentApp extends Component {
	constructor(props) {
		super(props)
		this.state = {
			comments: props.data
		}
	}

	handleSubmitComment(comment) {
		if (!comment) return
		if (!comment.username) return alert('请输入用户名')
		if (!comment.content) return alert('请输入评论内容')
		this.state.comments.push(comment)
		this.props.saveData(this.state.comments)
		this.setState({
			comments: this.state.comments
		})
	}

	handleDeleteComment(index) {
		let comments = this.state.comments
		comments.splice(index, 1)
		this.setState({comments})
		this.props.saveData(comments)
	}

	render() {
		return (
			<div className='wrapper'>
				<CommentInput onSubmit={this.handleSubmitComment.bind(this)}/>
				<CommentList
					onDeleteComment={this.handleDeleteComment.bind(this)}
					comments={this.state.comments}/>
			</div>
		)
	}
}

CommentApp = wrapWithLoadData(CommentApp, 'comments')
export default CommentApp
