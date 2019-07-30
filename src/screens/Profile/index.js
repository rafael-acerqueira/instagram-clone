import React from 'react'

import {
	Container,
	Avatar,
	Nickname,
	Email,
	Button,
	ButtonText
} from './styles'

export default props => {
	const logout = () => {
		props.navigation.navigate('Auth')
	}

	return (
		<Container>
			<Avatar options={{ email: 'teste@teste.com', secure: true }} />
			<Nickname>Fulano</Nickname>
			<Email>fulano@teste.com</Email>
			<Button onPress={logout}>
				<ButtonText>Sair</ButtonText>
			</Button>
		</Container>
	)
}
