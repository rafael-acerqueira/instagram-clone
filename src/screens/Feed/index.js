import React, { useEffect } from 'react'
import { FlatList } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'

import Header from '../../components/Header'
import Post from '../../components/Post'

import { Creators as PostActions } from '../../store/ducks/post'

import { Container, Loading } from './styles'

export default () => {
	const posts = useSelector(state => state.post.data)
	const isLoading = useSelector(state => state.post.isLoading)
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(PostActions.fetchRequest())
	}, [])
	return (
		<Container>
			<Header />
			{isLoading ? (
				<Loading size="large" />
			) : (
				<FlatList
					data={posts}
					keyExtractor={item => `${item.id}`}
					renderItem={({ item }) => <Post key={item.id} {...item} />}
				/>
			)}
		</Container>
	)
}
