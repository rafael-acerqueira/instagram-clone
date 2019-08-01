import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Creators as UserActions } from '../../store/ducks/user'

import { Container, Input, Button, ButtonText } from './styles'

export default props => {
	const [email, setEmail] = useState('')
	const [name, setName] = useState('Temporário')
	const [password, setPassword] = useState('')
	const dispatch = useDispatch()

	const login = () => {
		dispatch(UserActions.login({ name, email }))
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
			<Button onPress={() => props.navigation.navigate('Register')}>
				<ButtonText>Criar nova conta...</ButtonText>
			</Button>
		</Container>
	)
}
