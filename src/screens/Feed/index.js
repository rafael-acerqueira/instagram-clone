import React, { useState } from 'react'
import { FlatList } from 'react-native'
import Header from '../../components/Header'
import Post from '../../components/Post'

import { Container } from './styles'

export default () => {
	const [posts, setPosts] = useState([
		{
			id: Math.random(),
			nickname: 'Rafael',
			email: 'teste@dasda.com',
			image: require('../../../assets/imgs/gate.jpg'),
			comments: [
				{
					nickname: 'Jonh',
					comment: 'MAssa vu'
				},
				{
					nickname: 'Vó',
					comment: 'Bonitao'
				}
			]
		},
		{
			id: Math.random(),
			nickname: 'José',
			email: 'jose@dasda.com',
			image: require('../../../assets/imgs/bw.jpg'),
			comments: []
		}
	])

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
