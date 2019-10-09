import authReducers from './authReducers';
import formReducers from './formReducers';
import helpReducers from './helpReducers';
import donateReducers from './donateReducers';
import eventReducers from './eventReducers';
import {combineReducers} from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer} from 'react-redux-firebase'

const rootReducers=combineReducers({
    auth:authReducers,
    form:formReducers,
    help:helpReducers,
    donate:donateReducers,
    event:eventReducers,
    firestore:firestoreReducer,
    firebase:firebaseReducer
})

export default rootReducers;