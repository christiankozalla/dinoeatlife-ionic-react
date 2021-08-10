import React, { createContext, useReducer } from 'react';

/* Types */
import { Home } from './models/home'; // includes home.recipes, home.posts, home.ingredients
import { Post } from './models/post';
import { User } from './models/user'; // includes user.profile

interface State {
  home: Home | null;
  user: User | null;
}

type Reducer = (state: State, action: any) => State;

const initialState: State = {
  home: null,
  user: null,
};

interface Action {
  type: 'setPosts';
  payload: object;
}

// interface Action extends React.Dispatch<Action> {
//   type: 'setCount';
//   count?: State['count'];
// }

const reducer: Reducer = (state: State, action: any) => {
  console.log('%cPrevious State:', 'color: #9E9E9E; font-weight: 700;', state);
  console.log('%cAction:', 'color: #00A7F7; font-weight: 700;', action);

  switch (action.type) {
    case 'setPosts': {
      const newState = {
        ...state,
        home: {
          posts: action.payload,
        },
      };
      console.log('%cNext State:', 'color: #47B04B; font-weight: 700;', newState);
      return newState;
    }
    default:
      return state;
  }
};

let AppContext = createContext({
  state: { ...initialState },
  dispatch: (value: Action) => {},
});

const AppContextProvider: React.FC = (props) => {
  const fullInitialState = {
    ...initialState,
  };

  let [state, dispatch] = useReducer(reducer, fullInitialState);

  let value = { state, dispatch };
  return <AppContext.Provider value={value}>{props.children}</AppContext.Provider>;
};

let AppContextConsumer = AppContext.Consumer;

export { AppContext, AppContextProvider, AppContextConsumer };
