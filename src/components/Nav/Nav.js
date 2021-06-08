import React from 'react';
import {useHistory} from 'react-router-dom';
import {BsArrowLeft} from 'react-icons/bs';
import NavDiv from './styled';

const Nav = ({pn}) => {
	const history = useHistory();
	const handleBack = () => {
		history.goBack();
	};

	return (
		<NavDiv>
			<div className='Arrow_back' onClick={handleBack}>
				<BsArrowLeft />
			</div>
			<span className='Text'>
				{pn === '/formuser'
					? 'Tus Datos'
					: pn === '/gender'
					? 'Tu Genero'
					: 'Tu Horoscopo'}
			</span>
		</NavDiv>
	);
};

export default Nav;
