import React from 'react';
import {useState} from 'react';
import Form from './styled';
import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {updateUser} from '../../redux/actions';
import {Link} from 'react-router-dom';

const inputsForm = [
	{type: 'text', label: 'Nombre', name: 'name'},
	{type: 'text', label: 'Email', name: 'email'},
	{type: 'date', label: 'Fecha de Nacimiento', name: 'date'},
];

const FormUser = () => {
	const [input, setInput] = useState({});
	const [error, setError] = useState(false);

	const dispatch = useDispatch();

	let history = useHistory();

	const handleonChangue = ({target: {name, value}}) => {
		setInput({...input, [name]: value});
	};
	const handleonClick = (e) => {
		e.preventDefault();
		if (!input.name || !input.email || !input.date) {
			setError(true);
		} else {
			setError(false);
			dispatch(updateUser(input));
			history.push('/horoscope');
		}
	};

	return (
		<Form>
			<div className='list'>
				<ul>
					<li></li>
					<li></li>
					<li></li>
				</ul>
			</div>
			<h2 className='h2_title'>INGRESA TUS DATOS</h2>

			<div className='datos'>
				{inputsForm &&
					inputsForm.map(({type, label, name}) => (
						<div key={name} className='input_cnt'>
							<label>{label}: </label>
							<input
								className='inputs'
								name={name}
								type={type}
								onChange={handleonChangue}
							></input>
						</div>
					))}

				<div className='div_error'>
					{error ? <span>Tienes que llenar todos los Campos</span> : null}
				</div>
			</div>

			<div className='btn_ctn'>
				<Link to='/gender'>
					<button className='btn btnBack'>VOLVER</button>
				</Link>

				<button onClick={handleonClick} className='btn'>
					CONTINUAR
				</button>
			</div>
		</Form>
	);
};

export default FormUser;
