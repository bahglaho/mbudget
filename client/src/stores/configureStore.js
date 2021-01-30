import { createStore } from 'redux';
import index from './reducers/index'
import initialData from './initData';

//export default createStore(index)

export default function configureStore(){
    return createStore(
        index,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
};