import { getPost, getPostList } from "../api/post";

const GET_POST_LIST = "post/GET_POST_LIST";
const GET_POST_LIST_SUCCESS = "post/GET_POST_LIST_SUCCESS";
const GET_POST_LIST_ERROR = "post/GET_POST_LIST_ERROR";

const GET_POST = "post/GET_POST";
const GET_POST_SUCCESS = "post/GET_POST_SUCCESS";
const GET_POST_ERROR = "post/GET_POST_ERROR";

const initialState = {
  post_list: {
    data: null,
    isLoading: false,
    error: null,
  },
  post: {
    data: null,
    isLoading: false,
    error: null,
  },
};

export const getPostListThunk = (categoryId) => async (dispatch) => {
  dispatch({ type: GET_POST_LIST });
  try {
    const post_list = await getPostList(categoryId);
    dispatch({ type: GET_POST_LIST_SUCCESS, data: post_list });
  } catch (e) {
    dispatch({ type: GET_POST_LIST_ERROR, error: e });
  }
};

export const getPostThunk = (postId) => async (dispatch) => {
  dispatch({ type: GET_POST });
  try {
    const post = await getPost(postId);
    dispatch({ type: GET_POST_SUCCESS, data: post });
  } catch (e) {
    dispatch({ type: GET_POST_ERROR, error: e });
  }
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POST_LIST:
      return {
        ...state,
        post_list: {
          data: state.post_list.data,
          isLoading: true,
          error: null,
        },
      };
    case GET_POST_LIST_SUCCESS:
      return {
        ...state,
        post_list: {
          data: action.data,
          isLoading: false,
          error: null,
        },
      };
    case GET_POST_LIST_ERROR:
      return {
        ...state,
        post_list: {
          data: state.post_list.data,
          isLoading: false,
          error: action.error,
        },
      };
    case GET_POST:
      return {
        ...state,
        post: {
          data: state.data,
          isLoading: true,
          error: null,
        },
      };
    case GET_POST_SUCCESS:
      return {
        ...state,
        post: {
          data: action.data,
          isLoading: false,
          error: null,
        },
      };
    case GET_POST_ERROR:
      return {
        ...state,
        post: {
          data: state.data,
          isLoading: false,
          error: action.error,
        },
      };
    default:
      return state;
  }
};

export default postReducer;
