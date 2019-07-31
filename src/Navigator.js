import React from 'react'
import {
	createBottomTabNavigator,
	createSwitchNavigator,
	createAppContainer,
	createStackNavigator
} from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'

import Feed from './screens/Feed'
import AddPhoto from './screens/AddPhoto'
import Profile from './screens/Profile'
import Login from './screens/Login'
import Register from './screens/Register'

const authRouter = createStackNavigator(
	{
		Login: {
			screen: Login,
			navigationOptions: {
				title: 'Login'
			}
		},
		Register: {
			screen: Register,
			navigationOptions: {
				title: 'Register'
			}
		}
	},
	{ initialRouteName: 'Login' }
)

const loginOrProfileRouter = createSwitchNavigator(
	{
		Profile,
		Auth: authRouter
	},
	{
		initialRouteName: 'Profile'
	}
)

const MenuRoutes = createBottomTabNavigator(
	{
		Feed: {
			name: 'Feed',
			screen: Feed,
			navigationOptions: {
				title: 'Feed',
				tabBarIcon: ({ tintColor }) => (
					<Icon name="home" size={30} color={tintColor} />
				)
			}
		},
		AddPhoto: {
			name: 'AddPhoto',
			screen: AddPhoto,
			navigationOptions: {
				title: 'Add Photo',
				tabBarIcon: ({ tintColor }) => (
					<Icon name="camera" size={30} color={tintColor} />
				)
			}
		},
		Profile: {
			name: 'Profile',
			screen: loginOrProfileRouter,
			navigationOptions: {
				title: 'Profile',
				tabBarIcon: ({ tintColor }) => (
					<Icon name="user" size={30} color={tintColor} />
				)
			}
		}
	},
	{
		initialRouteName: 'Feed',
		tabBarOptions: {
			showLabel: false
		}
	}
)

export default createAppContainer(MenuRoutes)
