import { useCallback, useReducer } from "react";

const LOADING = "LOADING";
const SUCCESS = "SUCCESS";
const ERROR = "ERROR";

const initialState = {
  data: null,
  isLoading: false,
  error: null,
};

const httpreducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case SUCCESS:
      return {
        data: action.data,
        isLoading: false,
        error: null,
      };
    case ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      throw new Error("정의되지 않은 핸들링입니다");
  }
};

function useHTTP(getData) {
  const [state, dispatch] = useReducer(httpreducer, initialState);

  const fetchData = useCallback(
    async (url) => {
      dispatch({
        type: LOADING,
      });
      try {
        const data = await getData(url);
        dispatch({
          type: SUCCESS,
          data,
        });
      } catch (e) {
        dispatch({
          type: ERROR,
          error: e,
        });
      }
    },
    [getData]
  );

  return { state, fetchData };
}

export default useHTTP;
