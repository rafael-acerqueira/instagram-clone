import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { FlatList } from 'react-native'
import Header from '../../components/Header'
import Post from '../../components/Post'

import { Creators as PostActions } from '../../store/ducks/post'

import { Container } from './styles'

export default () => {
	const posts = useSelector(state => state.post.data)
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(PostActions.fetchRequest())
	}, [])
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
