import {TodosAction, TodosActionTypes} from './todos.actions';
import {Todo} from "../../../../domain/src/lib/interfaces/todo.interface";

export const TODOS_FEATURE_KEY = 'todos';

export  interface TodosState {
  finished: Todo[],
  active: Todo[],
  selected: Todo | null
}

export interface Todo {
  id: number,
  goal: String
}

export interface TodosPartialState {
  readonly [TODOS_FEATURE_KEY]: TodosState;
}

export const initialState: TodosState = {
  finished: [],
  active: [],
  selected: null
};

export function reducer(
  state: TodosState = initialState,
  action: TodosAction
): TodosState {


  switch (action.type) {

    case TodosActionTypes.DeleteTodo: {

      state = {
        ...state,
        active: state.active.filter(el => el.id != action.payload)

      };

      break;
    }

    case TodosActionTypes.EditTodo: {

      state = {
        ...state,
        active: [...state.active.filter(el => el.id != action.payload.id), action.payload],
        selected: null
      };

      break;
    }

    case TodosActionTypes.CancelTodoSelection: {

      state = {
        ...state,
        selected: null
      };

      break;
    }

    case TodosActionTypes.SelectTodo: {

      state = {
        ...state,
        selected: action.payload
      };

      break;
    }

    case TodosActionTypes.FinishTodo: {
      const {selected} = state;
      let removeSelected:boolean = false
      if(selected && selected ===action.payload) removeSelected = true;

      state = {
        ...state,
        active: state.active.filter(el => el.id != action.payload.id),
        finished: [...state.finished, action.payload],
        selected: removeSelected ? null : selected
      };

      break;
    }

    case TodosActionTypes.AddTodo: {

      state = {
        ...state,
        active: [...state.active, action.payload]
      };

      break;
    }

    case TodosActionTypes.UpdateTodosFromDP: {

      state = action.payload;

      break;
    }

  }
  return state;
}
