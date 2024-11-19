import { useReducer } from "react";
import { Counter } from "./Counter";
import { limitAmount } from "../functions";

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

    default: {
      return state;
    }
  }
};

const ReviewForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
  };

  return (
    <form className="feedback" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Имя</label>
        <input
          name="name"
          value={state.name}
          onChange={(e) =>
            dispatch({ type: ACTION_TYPES.SET_NAME, payload: e.target.value })
          }
          type="text"
          placeholder="Ваше имя"
        />
      </div>

      <textarea
        value={state.text}
        onChange={(e) =>
          dispatch({ type: ACTION_TYPES.SET_TEXT, payload: e.target.value })
        }
        type="text"
        placeholder="Ваш отзыв..."
        rows="5"
      />

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
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

        <button type="submit">Отправить</button>
      </div>
    </form>
  );
};

export { ReviewForm };
