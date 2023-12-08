import {combineReducers} from 'redux'
import user from './user'
import vocabulary from './vocabulary'

const rootReducer = combineReducers({
    user,
    vocabulary
})

export default rootReducer