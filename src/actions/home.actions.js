
// import * as types from '../../constants/actionTypes';
import {homeConstants} from '../constants';





export const setVisibilityFilter = (filter) => ({
    type: homeConstants.SET_VISIBILITY_FILTER,
    filter
});


export const handleKeyUp = (id) => ({
    type: homeConstants.HANDLE_KEY_UP,
    id
});


export const handleSearchTerm = (id) => ({
    type: homeConstants.HANDLE_SEARCH_TERM,
    id
});


export const setInitialState = (id) => ({
    type: homeConstants.START,
    id
});

export const toggleList = (id) => ({
    type: homeConstants.TOGGLE_TODO,
    id
});


export const viewNext = (id) => ({
    type: homeConstants.VIEW_NEXT,
    id
});


export const viewPrevious = (id) => ({
    type: homeConstants.VIEW_PREVIOUS,
    id
});

export const selectSubreddit = subreddit => ({
  type: homeConstants.SELECT_SUBREDDIT,
  subreddit
});

export const invalidateSubreddit = subreddit => ({
  type: homeConstants.INVALIDATE_SUBREDDIT,
  subreddit
});

export const requestPosts = subreddit => ({
  type: homeConstants.REQUEST_POSTS,
  subreddit
});

export const receivePosts = (subreddit, json) =>
(
    {
      type: homeConstants.RECEIVE_POSTS,
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
