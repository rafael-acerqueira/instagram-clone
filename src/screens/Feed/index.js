import React from 'react'
import { useSelector } from 'react-redux'
import { FlatList } from 'react-native'
import Header from '../../components/Header'
import Post from '../../components/Post'

import { Container } from './styles'

export default () => {
	const posts = useSelector(state => state.post.data)
	return (
		<Container>
			<Header />
			<FlatList
				data={posts}
				keyExtractor={item => `${item.id}`}
				renderItem={({ item }) => <Post key={item.id} {...item} />}
			/>
		</Container>
	)
}
