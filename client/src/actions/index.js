import streams from '../apis/streams';
import history from '../history';
import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  DELETE_STREAM,
  EDIT_STREAM
} from "./types";

//Action Creator
export const signIn = (userId) => {
    return {
        type: SIGN_IN,
        payload: userId
    };
};

//Action Creator
export const signOut = () => {
    return {
        type: SIGN_OUT
    };
};

//Action Creator
export const createStream = (formValues) => async (dispatch, getState) => {
  const {userId } = getState().auth;
  const response = await streams.post('/streams', { ...formValues, userId});

  dispatch({ type: CREATE_STREAM, payload: response.data });
  //Do Some Programmatic Navigation to get user back to the root route
  history.push('/');

};

//Action Creator
export const fetchStreams = () => async dispatch => {
  const response = await streams.get('/streams');
  dispatch({ type: "FETCH_STREAMS", payload: response.data});
};

export const fetchStream = (id) => async dispatch => {
  const response = await streams.get(`/streams/${id}`);
  dispatch({ type: "FETCH_STREAM", payload: response.data});
};

export const editStream = (id, formValues) => async dispatch => {
  const response = await streams.patch(`/streams/${id}`, formValues);
  //CHANGED .put to .patch to update the formValues but not destroy any props
  dispatch({ type: "EDIT_STREAM", payload: response.data});
  history.push('/');
};

export const deleteStream = (id) => async dispatch => {
  await streams.delete(`/streams/${id}`);
  dispatch({ type: "DELETE_STREAM", payload: id });
  history.push('/');
};