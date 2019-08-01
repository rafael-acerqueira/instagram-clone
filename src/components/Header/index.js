import React from 'react'
import { useSelector } from 'react-redux'
import logo from '../../../assets/imgs/icon.png'
import {
	Container,
	RowContainer,
	Image,
	Title,
	UserContainer,
	UserName,
	Avatar
} from './styles'

export default () => {
	const { name, email } = useSelector(state => state.user)

	return (
		<Container>
			<RowContainer>
				<Image source={logo} resizeMode="contain" />
				<Title>Lambe Lambe</Title>
			</RowContainer>
			<UserContainer>
				<UserName>{name}</UserName>
				{email ? <Avatar options={{ email, secure: true }} /> : null}
			</UserContainer>
		</Container>
	)
}
