import axios from 'axios';
import {H_URL, US_RAND} from '../../utils/constants';

export const SET_HOROSCOPE = 'SET_HOROSCOPE';
export const SET_USER = 'SET_USER';
export const CLEAN_USER = 'CLEAN_USER';
export const UPDATE_USER = 'UPDATE_USER';
export const CLEAN_HOROSCOPE = 'CLEAN_HOROSCOPE';

export const getHoroscope = () => {
	return async (dispatch) => {
		try {
			const {
				data: {horoscopo},
			} = await axios.get(H_URL);
			dispatch({
				type: SET_HOROSCOPE,
				payload: horoscopo,
			});
		} catch (error) {
			alert('horoscopo error', error);
		}
	};
};

export const getUser = () => {
	return async (dispatch) => {
		try {
			const {
				data: {results},
			} = await axios.get(US_RAND);
			dispatch({
				type: SET_USER,
				payload: results[0],
			});
		} catch (error) {
			alert('user error', error);
		}
	};
};

export const updateUser = (gender) => {
	return (dispatch) => {
		dispatch({
			type: UPDATE_USER,
			payload: gender,
		});
	};
};
export const cleanHoroscope = () => {
	return (dispatch) => {
		dispatch({
			type: CLEAN_HOROSCOPE,
			payload: {},
		});
	};
};
