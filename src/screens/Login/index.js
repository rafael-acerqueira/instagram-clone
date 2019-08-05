import React, { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Creators as UserActions } from '../../store/ducks/user'

import { Container, Input, Button, ButtonText } from './styles'

export default props => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const dispatch = useDispatch()
	const isLoading = useSelector(state => state.user.isLoading)

	const usePrevious = value => {
		const ref = useRef()

		useEffect(() => {
			ref.current = value
		}, [value])

		return ref.current
	}

	const login = () => {
		dispatch(UserActions.loginRequest({ email, password }))
	}

	const prevIsLoading = usePrevious(isLoading)

	useEffect(() => {
		if (!isLoading && prevIsLoading) props.navigation.navigate('Profile')
	}, [isLoading])

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
