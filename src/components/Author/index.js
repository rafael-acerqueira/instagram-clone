import React from 'react'
import { Gravatar } from 'react-native-gravatar'
import { StyleSheet } from 'react-native'
import { Container, Nickname } from './styles'

export default ({ nickname, email }) => {
	return (
		<Container>
			<Gravatar
				options={{ email: email, secure: true }}
				style={styles.avatar}
			/>
			<Nickname>{nickname}</Nickname>
		</Container>
	)
}

const styles = StyleSheet.create({
	avatar: {
		width: 30,
		height: 30,
		borderRadius: 15,
		marginHorizontal: 10
	}
})
