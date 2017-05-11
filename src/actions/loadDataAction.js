import { LOAD_DATA } from './types'

export const loadData = () => dispatch => {
	fetch('https://www.reddit.com/new/.json').then(response => response.json())
		.then(data => {
			dispatch({
				type: LOAD_DATA,
				payload: data.data.children
			})
		})
}