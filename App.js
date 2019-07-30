import React from 'react'
import { View } from 'react-native'
import Header from './src/components/Header'
import Post from './src/components/Post'

const App = () => {
	const comments = [
		{
			nickname: 'Teteia',
			comment: 'Nossa que bonito'
		},
		{
			nickname: 'Josefina',
			comment: 'To com fome'
		}
	]

	return (
		<View style={{ flex: 1 }}>
			<Header />
			<Post image={require('./assets/imgs/fence.jpg')} comments={comments} />
		</View>
	)
}

export default App
