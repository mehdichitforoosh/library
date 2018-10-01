import { combineReducers } from 'redux'
import { loadingBarReducer } from 'react-redux-loading-bar'

const reducer = combineReducers({
    // app reducers
    loadingBar: loadingBarReducer,
});

export default reducer;