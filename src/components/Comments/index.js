import React from 'react'
import { Container, CommentContainer, Nickname, Comment } from './styles'

export default props => {
	return (
		<Container>
			{props.data &&
				props.data.map((item, index) => (
					<CommentContainer key={index}>
						<Nickname>{item.nickname}: </Nickname>
						<Comment>{item.comment}</Comment>
					</CommentContainer>
				))}
		</Container>
	)
}
