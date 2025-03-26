import { combineReducers } from 'redux'
import authReducer from './auth'
import currentUserReducer from './currentuser'
import channelReducer from './channel'
import videoReducer from './video'
import commentReducer from './comment'
import historyReducer from './history'
import likedVideoReducer from './likevideo'
import watchLaterReducer from './watchlater'

export default combineReducers({
    authReducer,
    currentUserReducer,
    channelReducer,
    videoReducer,
    commentReducer,
    historyReducer,
    likedVideoReducer,
    watchLaterReducer,
});