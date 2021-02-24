import { combineReducers } from 'redux'
import { appReduser } from './appReduser'
import { postsReduser } from './postsReduser'

export const rootReducer = combineReducers({
	posts: postsReduser,
	app: appReduser
})