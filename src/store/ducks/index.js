import { combineReducers } from 'redux'

import user from './user'
import post from './post'
import message from './message'

export default combineReducers({ user, post, message })
