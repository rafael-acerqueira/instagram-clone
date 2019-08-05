import React, { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Creators as UserActions } from '../../store/ducks/user'

import { Container, Input, Button, ButtonText } from './styles'

export default props => {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const isLoading = useSelector(state => state.user.isLoading)
	const dispatch = useDispatch()

	const usePrevious = value => {
		const ref = useRef()

		useEffect(() => {
			ref.current = value
		}, [value])

		return ref.current
	}

	const prevIsLoading = usePrevious(isLoading)

	useEffect(() => {
		if (!isLoading && prevIsLoading) props.navigation.navigate('Profile')
		setName('')
		setEmail('')
		setPassword('')
	}, [isLoading])
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
