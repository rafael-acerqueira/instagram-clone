import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { Creators as UserActions } from '../../store/ducks/user'

import { Container, Input, Button, ButtonText } from './styles'

export default () => {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const dispatch = useDispatch()

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
			<Button
				onPress={() =>
					dispatch(UserActions.registerRequest({ name, email, password }))
				}
			>
				<ButtonText>Salvar</ButtonText>
			</Button>
		</Container>
	)
}
