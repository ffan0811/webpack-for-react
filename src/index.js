import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App';

const render = Component =>
	ReactDOM.render(
		<AppContainer>
			<Component/>
		</AppContainer>,
		document.getElementById('root')
	);

render(App);

if (module.hot) module.hot.accept('./pages/App',() => render(App));
