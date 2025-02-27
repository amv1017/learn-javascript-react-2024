"use client";

import { useReducer } from "react";
import classNames from "classnames";
import { Counter } from "./Counter";
import { useTheme, useAuth } from "@/hooks";
import { limitAmount } from "@/functions";
import styles from "./ReviewForm.module.css";

const initialState = {
  name: "",
  text: "",
  rating: 0,
};

const ACTION_TYPES = {
  SET_NAME: "SET_NAME",
  SET_TEXT: "SET_TEXT",
  SET_RATING: "SET_RATING",
  CLEAR: "CLEAR",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.SET_NAME: {
      return { ...state, name: action.payload };
    }

    case ACTION_TYPES.SET_TEXT: {
      return { ...state, text: action.payload };
    }

    case ACTION_TYPES.SET_RATING: {
      return { ...state, rating: action.payload };
    }

    case ACTION_TYPES.CLEAR: {
      return initialState;
    }

    default: {
      return state;
    }
  }
};

const ReviewForm = ({ onAddReview }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { theme } = useTheme();
  const { user } = useAuth();

  const common = theme == "dark" ? styles.dark : styles.light;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await onAddReview({
        ...state,
        userId: user.id,
      });
    } catch (error) {
      console.error("Failed to add review: ", error);
    }
  };

  return (
    <form
      className={classNames(styles.feedback, common)}
      onSubmit={handleSubmit}
    >
      <textarea
        value={state.text}
        onChange={(e) =>
          dispatch({ type: ACTION_TYPES.SET_TEXT, payload: e.target.value })
        }
        type="text"
        placeholder="Your message..."
        rows="5"
      />

      <div className={styles.buttons}>
        <Counter
          value={state.rating}
          increment={() =>
            dispatch({
              type: ACTION_TYPES.SET_RATING,
              payload: limitAmount(state.rating + 1),
            })
          }
          decrement={() =>
            dispatch({
              type: ACTION_TYPES.SET_RATING,
              payload: limitAmount(state.rating - 1),
            })
          }
        />

        <button type="submit">Send</button>
        <button
          type="reset"
          onClick={() => {
            dispatch({ type: ACTION_TYPES.CLEAR });
          }}
        >
          ✖
        </button>
      </div>
    </form>
  );
};

export { ReviewForm };
