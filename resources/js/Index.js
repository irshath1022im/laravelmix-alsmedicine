import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './redux/rootReducer';
import thunk from 'redux-thunk';
import Home from './Home';



function Index() {
const store = createStore( rootReducer, composeWithDevTools(applyMiddleware(thunk)))
    return (
     <Provider store={store}>
        <Home/>
     </Provider>
    )
}

export default Index;

if (document.getElementById('example')) {
    ReactDOM.render(<Index />, document.getElementById('example'));
}
