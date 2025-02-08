import { useReducer } from "react";

const INITIAL_VALUE = {
  name: "",
  comments: "",
};
const SET_NAME_ACTION = "SET_NAME_ACTION";
const SET_COMMENT_ACTION = "SET_COMMENTS_ACTION";
const RESET = "RESET";

const reducer = (form, { type, payload }) => {
  switch (type) {
    case SET_NAME_ACTION:
      return {
        ...form,
        name: payload,
      };
    case SET_COMMENT_ACTION:
      return {
        ...form,
        comments: payload,
      };
    case RESET:
      return INITIAL_VALUE;
    default:
      return form;
  }
};

export const useForm = () => {
  const [form, dispath] = useReducer(reducer, INITIAL_VALUE);

  const setName = (value) => {
    return dispath({ type: SET_NAME_ACTION, payload: value });
  };

  const setComment = (value) => {
    return dispath({ type: SET_COMMENT_ACTION, payload: value });
  };

  const reset = () => {
    return dispath({ type: RESET });
  };

  return {
    form,
    setName,
    setComment,
    reset,
  };
};
