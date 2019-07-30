import React from 'react'

import { Container, Nickname, Avatar } from './styles'

export default ({ nickname, email }) => {
	return (
		<Container>
			<Avatar options={{ email: email, secure: true }} />
			<Nickname>{nickname}</Nickname>
		</Container>
	)
}
