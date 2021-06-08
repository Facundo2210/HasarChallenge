import React from 'react';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import HoroscopeDiv from './styled';
import {userBirthday, matchHoroscope} from '../../utils/auxiliar';
import Spinner from '../Spinner/Spinner';

const Horoscope = () => {
	const actualUser = useSelector((state) => state.actualUser);
	const horoscope = useSelector((state) => state.horoscope);
	const {name, date} = actualUser,
		mount = parseInt(date && date.split('-')[1]),
		days = parseInt(date && date.split('-')[2]),
		total = userBirthday(mount, days),
		userHoroscope = matchHoroscope(mount, days),
		userHoroscopeFinish = horoscope[userHoroscope.name];


	if (!horoscope || !actualUser || !userHoroscopeFinish) {
		return (
			<HoroscopeDiv>
				<Spinner />
			</HoroscopeDiv>
		);
	} else
		return (
			<HoroscopeDiv>
				<img
					src={userHoroscope.img}
					className='sign_img'
					alt='horoscopo imagen'
				/>
				<h1>Hola {name}!</h1>

				<div className='hcp_cnt'>
					Tu horoscopo para hoy dice:{' '}
					{userHoroscopeFinish && userHoroscopeFinish.amor} En cuanto al dinero,{' '}
					{userHoroscopeFinish && userHoroscopeFinish.dinero}{' '}
					{userHoroscopeFinish && userHoroscopeFinish.salud}
				</div>
				<p>
					Este Signo es del{' '}
					{userHoroscopeFinish && userHoroscopeFinish.fechaSigno}
				</p>
				{total === 0 ? (
					<div>Mañana es tu cumpleaños!</div>
				) : total === 363 ? (
					<div>Ayer fue tu cumpleaños!</div>
				) : total === 364 ? (
					<div>Hoy es tu cumpleaños!</div>
				) : (
					<div>Faltan {total} dias para tu cumpleaños!</div>
				)}

				<Link to='/' className='home'>
					CONTINUAR
				</Link>
			</HoroscopeDiv>
		);
};

export default Horoscope;
