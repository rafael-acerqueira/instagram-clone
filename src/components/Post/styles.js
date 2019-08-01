import styled from 'styled-components/native'
import { Dimensions } from 'react-native'

export const Image = styled.Image`
	width: ${Dimensions.get('window').width};
	height: ${(Dimensions.get('window').width * 3) / 4};
	margin-bottom: 15px;
`
