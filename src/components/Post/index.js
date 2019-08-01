import React from 'react'

import { View } from 'react-native'
import { Image } from './styles'

import Author from '../Author'
import Comments from '../Comments'
import AddComment from '../AddComment'

export default props => {
	return (
		<View>
			<Image source={props.image} resizeMode="contain" />
			<Author nickname={props.nickname} email={props.email} />
			<Comments data={props.comments} />
			<AddComment />
		</View>
	)
}
