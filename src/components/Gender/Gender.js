import React, {useState} from 'react';
import GenderDiv from './styled';
import male from '../../images/gen-1.png';
import female from '../../images/gen-3.png';
import noBinary from '../../images/gen-2.png';
import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {updateUser} from '../../redux/actions';

const generos = [
	{img: male, name: 'male'},
	{img: noBinary, name: 'noBinary'},
	{img: female, name: 'female'},
];

const Gender = () => {
	const [gender, setGender] = useState('noSelect');
	const [error, setError] = useState(false);
	let history = useHistory();

	const handleContinue = () => {
		gender === 'noSelect' ? setError(true) : history.push('/formuser');
	};

	const dispatch = useDispatch();

	const selectGenre = ({target: {name}}) => {
		setGender(name);
		dispatch(updateUser({gender: name}));
		setError(false);
	};

	return (
		<GenderDiv>
			<div>
				<ul className='ul_cnt'>
					<li></li>
					<li></li>
					<li></li>
				</ul>
				<h2 className='h2_sbttl'>INGRESÁ TU GÉNERO</h2>
			</div>
			<div className='img_cnt'>
				{generos &&
					generos.map(({img, name}) => (
						<img
							key={name}
							src={img}
							name={name}
							alt={name}
							className={name === gender ? 'select' : ''}
							onClick={selectGenre}
						/>
					))}
			</div>
			<div className='error'>
				{error ? <span>Debes Seleccionar un Genero</span> : null}
			</div>
			<button to='/formuser' className='continue' onClick={handleContinue}>
				CONTINUAR
			</button>
		</GenderDiv>
	);
};

export default Gender;
