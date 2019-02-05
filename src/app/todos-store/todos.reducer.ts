

const initialState = {
  loaded: false,
  data: [ {complete: false, label: 'Do smth'} ]
};

import * as fromActions from './todos.actions';


export function todoReducer(state = initialState, action: { type: string, payload: any }) {

  switch (action.type) {

    case fromActions.ADD_TODO: {
      return {
        ...state,
        data: [...state.data, action.payload]
      };
    }

    case fromActions.REMOVE_TODO: {
      return {
        ...state,
        data: state.data.filter(todo => todo.label !== action.payload.label)
      };

    }
    case fromActions.MARK_TODO: {

      const data = state.data.map(todo => {
        if (todo.label === action.payload.label) {
          todo.complete = !todo.complete;
        }
        return todo;
      });

      return {
        ...state,
        data
      };
    }



    default: return state;
  }
}
