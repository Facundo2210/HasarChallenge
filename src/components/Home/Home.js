import React from 'react';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getUser} from '../../redux/actions';
import Spinner from '../Spinner/Spinner';
import HomeDiv from './styled';
import {Link} from 'react-router-dom';

const Home = () => {
	const dispatch = useDispatch();

	const user = useSelector((state) => state.users);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getUser());
		dispatch(getHoroscope());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<HomeDiv>
			{user.picture ? (
				<img className='img_home' src={user.picture.large} alt='User Profile' />
			) : (
				<Spinner />
			)}
			<br />
			<Link to='/gender'>
				<button className='btn_home'>CONTINUAR</button>
			</Link>
		</HomeDiv>
	);
};

export default Home;
