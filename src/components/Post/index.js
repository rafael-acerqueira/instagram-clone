import React from 'react'

import { Container, Image } from './styles'

export default props => {
	return (
		<Container>
			<Image source={props.image} resizeMode="contain" />
		</Container>
	)
}
