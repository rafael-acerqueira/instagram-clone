import React from 'react'
import { View } from 'react-native'
import Header from './src/components/Header'
import Post from './src/components/Post'

const App = () => {
	return (
		<View>
			<Header />
			<Post image={require('./assets/imgs/fence.jpg')} />
		</View>
	)
}

export default App
