import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import commentsReducer from './commentsReducer';
// using combineReducers to interact with both postsReducer and 
// commentsReducer
export default combineReducers({
    posts: postsReducer,
    comments: commentsReducer
})