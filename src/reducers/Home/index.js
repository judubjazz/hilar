import {combineReducers} from 'redux'
import {SELECT_SUBREDDIT, INVALIDATE_SUBREDDIT, REQUEST_POSTS, RECEIVE_POSTS, START} from '../../actions/home.actions'


const initialState = {
    data: [],
    isFetching:true,
};

// function todoList(state = initialState, action) {
//   switch (action.type) {
//       case START:
//       return {
//           ...state,
//           visibilityFilter: action.filter
//       };
//     default:
//       return state
//   }
// }

const selectedSubreddit = (state ='',action) => {
    switch (action.type) {
        case SELECT_SUBREDDIT:
            return action.subreddit;
        default:
            return state
    }
}

// const todoApp = combineReducers({
//     todos,
//     visibilityFilter
// });

const data = (state = {
    isFetching: false,
    data: []
}, action) => {
    switch (action.type) {
        case INVALIDATE_SUBREDDIT:
            return {
                ...state,
            };
        case REQUEST_POSTS:
            return {
                ...state,
                isFetching: true,
            };
        case RECEIVE_POSTS:
            return {
                ...state,
                isFetching: false,
                data: action.data,
            };
        default:
            return state
    }
};

const postsBySubreddit = (state = {}, action) => {
    switch (action.type) {
        case INVALIDATE_SUBREDDIT:
        case RECEIVE_POSTS:
        case REQUEST_POSTS:
            let test = [action.subreddit];
            let test2 = data(state[action.subreddit], action);
            return {
                ...state,
                [action.subreddit]: data(state[action.subreddit], action),
            };
        default:
            return state
    }
};

const fetch = function(state = initialState, action) {
    switch (action.type) {
        case RECEIVE_POSTS:
        return {...state,
                data:action.data,
                isFetching:false
            };
    }

    return state;
};

const rootReducer = combineReducers({
    // postsBySubreddit,
    // selectedSubreddit
    fetch
});

export default rootReducer

