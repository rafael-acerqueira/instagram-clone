import React, { useState } from 'react'

import { Container, Input, Button, ButtonText } from './styles'

export default () => {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	return (
		<Container>
			<Input
				placeholder="Nome"
				autoFocus={true}
				value={name}
				onChangeText={name => setName(name)}
			/>
			<Input
				placeholder="Email"
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
			<Button onPress={() => {}}>
				<ButtonText>Salvar</ButtonText>
			</Button>
		</Container>
	)
}
