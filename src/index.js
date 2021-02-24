import React from 'react';
import { render } from 'react-dom';
import App from './App';
import thunk from 'redux-thunk'
import reportWebVitals from './reportWebVitals';
import { compose, createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { rootReducer } from './redux/rootReduser'

const store = createStore(rootReducer, compose(
	applyMiddleware(
		thunk
	),
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

const app = (
	<Provider store={store}>
		<App />
	</Provider>
)

render(
  <React.StrictMode>
    {app}
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
