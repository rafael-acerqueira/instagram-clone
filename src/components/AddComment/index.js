import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TouchableWithoutFeedback } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Container, Input, Caption } from './styles'
import { Creators as PostActions } from '../../store/ducks/post'

export default props => {
	const [comment, setComment] = useState('')
	const [editMode, setEditMode] = useState(false)
	const dispatch = useDispatch()
	const { name: nickname } = useSelector(state => state.user)

	const handleAddComment = () => {
		dispatch(
			PostActions.addCommentRequest(
				{
					nickname,
					comment
				},
				props.postId
			)
		)

		setComment('')
		setEditMode(false)
	}

	return editMode ? (
		<Container>
			<Input
				placeholder="Pode comentar..."
				autoFocus={true}
				value={comment}
				onChangeText={comment => setComment(comment)}
				onSubmitEditing={handleAddComment}
			/>
			<TouchableWithoutFeedback onPress={() => setEditMode(false)}>
				<Icon name="times" size={15} color="#555" />
			</TouchableWithoutFeedback>
		</Container>
	) : (
		<TouchableWithoutFeedback onPress={() => setEditMode(true)}>
			<Container>
				<Icon name="comment-o" size={25} color="#555" />
				<Caption>Adicione um comentário...</Caption>
			</Container>
		</TouchableWithoutFeedback>
	)
}
