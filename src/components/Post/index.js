import React from 'react'
import { useSelector } from 'react-redux'
import { View } from 'react-native'
import { Image } from './styles'

import Author from '../Author'
import Comments from '../Comments'
import AddComment from '../AddComment'

export default props => {
	const { name } = useSelector(state => state.user)
	return (
		<View>
			<Image source={{ uri: props.image }} resizeMode="contain" />
			<Author nickname={props.nickname} email={props.email} />
			<Comments data={props.comments} />
			{name ? <AddComment postId={props.id} /> : null}
		</View>
	)
}
