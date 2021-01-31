import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers/index';
import thunk from 'redux-thunk';

//export default createStore(index)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = null;

const loadState = () => {
    try {
        const serializedState = sessionStorage.getItem('state');
        if (serializedState === null) {
            return undefined;
        } else {
            return JSON.parse(serializedState);
        }
    } catch (err) {
        // Error handling
        return undefined;
    }
}
const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        sessionStorage.setItem('state', serializedState)
    } catch (err) {
        console.log(err)
    }
}
if(process.env.NODE_ENV === 'development'){
    store = createStore(rootReducer,loadState(), composeEnhancers(
        applyMiddleware(thunk)
    ));
}else{
    store = createStore(rootReducer,loadState(),applyMiddleware(thunk))
}
store.subscribe(() => saveState(store.getState()))
export default store;