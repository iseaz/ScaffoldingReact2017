import { LOAD_DATA } from '../actions/types'

export default (state = [], action) => {
	switch(action.type){
		case LOAD_DATA:
			return action.payload
		
		default:
			return state
	}
}