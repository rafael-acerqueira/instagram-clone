import React, { useState } from 'react'
import { TouchableWithoutFeedback } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Container, Input, Caption } from './styles'

export default () => {
	const [comment, setComment] = useState('')
	const [editMode, setEditMode] = useState(false)

	const handleAddComment = () => {}

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
