import React from 'react'
import logo from '../../../assets/imgs/icon.png'
import { Container, RowContainer, Image, Title } from './styles'

export default () => {
	return (
		<Container>
			<RowContainer>
				<Image source={logo} resizeMode="contain" />
				<Title>Lambe Lambe</Title>
			</RowContainer>
		</Container>
	)
}
