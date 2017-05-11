import { combineReducers } from 'redux'
import dataReducer from './dataReducer'

export default combineReducers({
	user: () => [{ id: 1, name: 'iSeaz' }],
	reddit: dataReducer
})