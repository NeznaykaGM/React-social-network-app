import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import './index.css';
import store from './redux/reduxStore'
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
// import {addPost , addTextPost, addMessage, addTextMessage, subscribe} from "./redux/state"




let rerenderEntireTree = (state) => {
    localStorage.setItem('state', JSON.stringify(state))
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <Provider store={store}>
                <App state={store.getState()} dispatch={store.dispatch.bind(store)} />
                </Provider>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}



rerenderEntireTree(store.getState());
store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state);
});


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


