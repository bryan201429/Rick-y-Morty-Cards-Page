    import {createStore,applyMiddleware,compose} from 'redux';
    import reducer from './reducer';
    import thunkMiddleware from 'redux-thunk'

    const comoposeEnhancer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    //Permite conectar la app con la extension redux devtools del navegador


    const store = createStore(
        reducer,
        comoposeEnhancer(applyMiddleware(thunkMiddleware))
        //Sirve para poder hacer peticiones a un API/servidor
    );

    export default store;
