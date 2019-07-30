import styled from 'styled-components/native'
import { Dimensions, Platform } from 'react-native'

export const Container = styled.View`
	flex: 1;
	align-items: center;
`

export const Title = styled.Text`
	font-size: 20px;
	margin-top: ${Platform.OS === 'ios' ? 30 : 10};
	font-weight: bold;
`

export const ImageContainer = styled.View`
	width: 90%;
	height: ${Dimensions.get('window').width / 2};
	background-color: #eee;
	margin-top: 10px;
`

export const Image = styled.Image`
	width: 100%;
	height: ${Dimensions.get('window').width / 2};
`

export const Button = styled.TouchableOpacity`
	margin-top: 30px;
	padding: 10px;
	background-color: #4286f4;
`

export const ButtonText = styled.Text`
	font-size: 20px;
	color: #fff;
`

export const Input = styled.TextInput`
	margin-top: 20px;
	width: 90%;
`
