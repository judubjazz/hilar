// import {HANDLE_KEY_UP,HANDLE_SEARCH_TERM,REQUEST_POSTS,RECEIVE_POSTS,SELECT_SUBREDDIT,INVALIDATE_SUBREDDIT,START} from '../constant/constant'
// import axios from 'axios';
// import * as types from '../../constants/actionTypes';


// let nextTodoId = 0;

export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT';
export const INVALIDATE_SUBREDDIT = 'INVALIDATE_SUBREDDIT';
export const START = 'START';
export const HANDLE_SEARCH_TERM = 'HANDLE_SEARCH_TERM';
export const HANDLE_KEY_UP = 'HANDLE_KEY_UP';




export const setVisibilityFilter = (filter) => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
});


export const handleKeyUp = (id) => ({
    type: 'HANDLE_KEY_UP',
    id
});


export const handleSearchTerm = (id) => ({
    type: 'HANDLE_SEARCH_TERM',
    id
});


export const setInitialState = (id) => ({
    type: 'START',
    id
});

export const toggleList = (id) => ({
    type: 'TOGGLE_TODO',
    id
});


export const viewNext = (id) => ({
    type: 'VIEW_NEXT',
    id
});


export const viewPrevious = (id) => ({
    type: 'VIEW_PREVIOUS',
    id
});

export const selectSubreddit = subreddit => ({
  type: SELECT_SUBREDDIT,
  subreddit
});

export const invalidateSubreddit = subreddit => ({
  type: INVALIDATE_SUBREDDIT,
  subreddit
});

export const requestPosts = subreddit => ({
  type: REQUEST_POSTS,
  subreddit
});

export const receivePosts = (subreddit, json) =>
(
    {
      type: RECEIVE_POSTS,
      subreddit,
      data: json.results.map(child => child),
    }
);

const fetchPosts = subreddit => dispatch => {
  dispatch(requestPosts(subreddit));
  return fetch(`http://127.0.0.1:5000/${subreddit}`)
    .then(response => response.json())
    .then(json => dispatch(receivePosts(subreddit, json)))
};

const shouldFetchPosts = (state, subreddit) => {
  const data = state.postsBySubreddit[subreddit];
  if (!data) {
    return true
  }
  if (data.isFetching) {
    return false
  }
  return data.didInvalidate
};

export const fetchPostsIfNeeded = subreddit => (dispatch, getState) => {
  if (shouldFetchPosts(getState(), subreddit)) {
    return dispatch(fetchPosts(subreddit))
  }
};

export const fetchData=(endpoint)=> dispatch=>{
    fetch(`http://127.0.0.1:5000/${endpoint}`)
    .then(response => response.json())
    .then(json => dispatch(receivePosts(endpoint, json)));

};
