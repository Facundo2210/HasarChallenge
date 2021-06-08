import React, {useEffect} from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Nav from './components/Nav/Nav';
import PWA from './components/PWA/PWA';
import Gender from './components/Gender/Gender';
import FormUser from './components/FormUser/FormUser';
import Horscope from './components/Horoscope/Horoscope';
import Home from './components/Home/Home';
import {useDispatch} from 'react-redux';
import {getHoroscope} from './redux/actions';

function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getHoroscope());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/PWA' component={PWA} />
				<Route
					path='/'
					render={({location: {pathname}}) => <Nav pn={pathname} />}
				/>
			</Switch>
			<Route exact path='/Gender' component={Gender} />
			<Route exact path='/Formuser' component={FormUser} />
			<Route exact path='/Horoscope' component={Horscope} />
		</>
	);
}

export default App;
