export const Types = {
  GET_REQUEST: "REPOSITORIES_GET_REQUEST",
  GET_SUCCESS: "REPOSITORIES_GET_SUCCESS",
  GET_FAILURE: "REPOSITORIES_GET_FAILURE"
};

const INITIAL_STATE = {
  data: []
};

export default function repositories(state = INITIAL_STATE, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export const Creators = {
  getRequest: () => ({
    type: Types.GET_REQUEST
  }),

  getSuccess: data => ({
    type: Types.GET_SUCCESS,
    payload: { data }
  }),

  getFailure: () => ({
    type: Types.GET_FAILURE
  })
};
