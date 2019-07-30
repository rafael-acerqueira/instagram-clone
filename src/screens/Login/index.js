import React, { useState } from 'react'

import { Container, Input, Button, ButtonText } from './styles'

export default props => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const login = () => {
		props.navigation.navigate('Profile')
	}

	return (
		<Container>
			<Input
				placeholder="Email"
				autoFocus={true}
				keyboardType="email-address"
				value={email}
				onChangeText={email => setEmail(email)}
			/>
			<Input
				placeholder="Senha"
				secureTextEntry={true}
				value={password}
				onChangeText={password => setPassword(password)}
			/>

			<Button onPress={login}>
				<ButtonText>Login</ButtonText>
			</Button>
			<Button onPress={() => {}}>
				<ButtonText>Criar nova conta...</ButtonText>
			</Button>
		</Container>
	)
}
