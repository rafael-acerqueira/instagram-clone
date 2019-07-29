import React from 'react'

import { Container, Image } from './styles'

import Author from '../Author'

export default props => {
	return (
		<Container>
			<Image source={props.image} resizeMode="contain" />
			<Author nickname="teste" email="teste@teste.com" />
		</Container>
	)
}
