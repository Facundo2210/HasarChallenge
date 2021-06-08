import {
	SET_HOROSCOPE,
	SET_USER,
	UPDATE_USER,
	CLEAN_HOROSCOPE,
	CLEAN_USER,
} from '../actions';

const initialState = {
	horoscope: {},
	users: {},
	actualUser: {},
};

const r = (state = initialState, {type, payload}) => {
	let {actualUser} = state;
	switch (type) {
		case SET_HOROSCOPE:
			return {...state, horoscope: payload};
		case CLEAN_HOROSCOPE:
			return {...state, horoscope: payload};
		case SET_USER:
			return {...state, users: payload};
		case CLEAN_USER:
			return {...state, users: payload};
		case UPDATE_USER:
			return {...state, actualUser: {...actualUser, ...payload}};
		default:
			return state;
	}
};

export default r;
