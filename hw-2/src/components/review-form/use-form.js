import { useReducer } from "react";

const INITIAL_VALUE = {
  name: "",
  comment: "",
  count: 0,
};
const SET_NAME_ACTION = "SET_NAME_ACTION";
const SET_COMMENT_ACTION = "SET_COMMENTS_ACTION";
const INCREMENT_ACTION = "INCREMENT_ACTION";
const DECREMENT_ACTION = "DECREMENT_ACTION";
const RESET_ACTION = "RESET_ACTION";

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
        comment: payload,
      };

    case INCREMENT_ACTION:
      return {
        ...form,
        count: form.count + 1,
      };
    case DECREMENT_ACTION:
      return {
        ...form,
        count: form.count - 1,
      };
    case RESET_ACTION:
      return INITIAL_VALUE;
    default:
      return form;
  }
};

export const useForm = () => {
  const [form, dispath] = useReducer(reducer, INITIAL_VALUE);

  const setName = (name) => {
    return dispath({ type: SET_NAME_ACTION, payload: name });
  };

  const setComment = (comment) => {
    return dispath({ type: SET_COMMENT_ACTION, payload: comment });
  };

  const increment = () => {
    return dispath({ type: INCREMENT_ACTION });
  };

  const decrement = () => {
    return dispath({ type: DECREMENT_ACTION });
  };

  const reset = () => {
    return dispath({ type: RESET_ACTION });
  };

  return {
    form,
    setName,
    setComment,
    increment,
    decrement,
    reset,
  };
};
