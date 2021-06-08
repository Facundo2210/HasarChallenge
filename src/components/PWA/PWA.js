import React from 'react';
import {Link} from 'react-router-dom';
import PWADIV from './styled';
import image from '../../images/horoscopo.png';
const PWA = () => {
	return (
		<PWADIV>
			<img
				src={image}
				alt='pwacharge'
				width={250}
				height={250}
				style={{borderRadius: '50%'}}
			/>
			<h1>Bienvenido a Hasar App</h1>
			<p>
				<b>Obten el horoscopo del dia de forma simple y rapida</b>
			</p>

			<Link to='/' className='start'>
				COMENZAR
			</Link>
		</PWADIV>
	);
};

export default PWA;
