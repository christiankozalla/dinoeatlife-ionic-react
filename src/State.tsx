import React, { createContext, useReducer } from 'react';

/* Types */
import { Home } from './models/home'; // includes home.recipes, home.posts, home.ingredients
import { Profile } from './models/profile'; // includes user.profile
import { User } from './models/user'; // includes user.profile

interface State {
  home: Home | null;
  user: User | null;
  global: {
    profiles: Profile[];
  };
}

type Reducer = (state: State, action: any) => State;

const initialState: State = {
  home: null,
  user: null,
  global: {
    profiles: [],
  },
};

interface Action {
  type: 'setPosts' | 'setProfile';
  payload: object;
}

// interface Action extends React.Dispatch<Action> {
//   type: 'setCount';
//   count?: State['count'];
// }

const reducer: Reducer = (state: State, action: any) => {
  switch (action.type) {
    case 'setPosts': {
      return {
        ...state,
        home: {
          posts: action.payload,
        },
      };
    }
    case 'setProfile': {
      const isProfileUnique = !state.global.profiles.some(
        ({ userId }) => userId === action.payload.userId
      );

      if (isProfileUnique) {
        return {
          ...state,
          global: {
            profiles: [...state.global.profiles, action.payload as Profile],
          },
        };
      } else {
        return state;
      }
    }
    default:
      return state;
  }
};

const logger = (reducer: Reducer) => {
  const reducerWithLogger = (state: State, action: any) => {
    console.log('%cPrevious State:', 'color: #9E9E9E; font-weight: 700;', state);
    console.log('%cAction:', 'color: #00A7F7; font-weight: 700;', action);
    console.log('%cNext State:', 'color: #47B04B; font-weight: 700;', reducer(state, action));
    return reducer(state, action);
  };
  return reducerWithLogger;
};

const loggerReducer = logger(reducer);

let AppContext = createContext({
  state: { ...initialState },
  dispatch: (value: Action) => {},
});

const AppContextProvider: React.FC = (props) => {
  const fullInitialState = {
    ...initialState,
  };

  let [state, dispatch] = useReducer(loggerReducer, fullInitialState);

  let value = { state, dispatch };
  return <AppContext.Provider value={value}>{props.children}</AppContext.Provider>;
};

let AppContextConsumer = AppContext.Consumer;

export { AppContext, AppContextProvider, AppContextConsumer };
