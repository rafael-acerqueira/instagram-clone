import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Creators as UserActions } from '../../store/ducks/user'

import {
	Container,
	Avatar,
	Nickname,
	Email,
	Button,
	ButtonText
} from './styles'

export default props => {
	const dispatch = useDispatch()
	const { name, email } = useSelector(state => state.user)

	const logout = () => {
		dispatch(UserActions.logout())
		props.navigation.navigate('Auth')
	}

	return (
		<Container>
			<Avatar options={{ email, secure: true }} />
			<Nickname>{name}</Nickname>
			<Email>{email}</Email>
			<Button onPress={logout}>
				<ButtonText>Sair</ButtonText>
			</Button>
		</Container>
	)
}
