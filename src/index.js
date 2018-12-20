import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import App from 'pages/App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from 'store/modules';

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const render = Component =>
	ReactDOM.render(
		<Provider store={store}>
			<AppContainer>
				<Component />
			</AppContainer>
		</Provider>,
		document.getElementById('root')
	);

render(App);

if (module.hot) module.hot.accept('pages/App',() => render(App));
