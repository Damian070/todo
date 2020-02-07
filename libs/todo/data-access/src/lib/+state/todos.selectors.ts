import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TODOS_FEATURE_KEY, TodosState } from './todos.reducer';

const getTodosState = createFeatureSelector<TodosState>(TODOS_FEATURE_KEY);

const getActive = createSelector(
  getTodosState,
  (state: TodosState) => state.active
);

const getFinished = createSelector(
  getTodosState,
  (state: TodosState) => state.finished
);

const getSelected = createSelector(
  getTodosState,
  (state: TodosState) => state.selected
);

export const todosQuery = {
  getSelected,
  getFinished,
  getActive
};
