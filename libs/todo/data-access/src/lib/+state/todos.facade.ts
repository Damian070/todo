import {Injectable} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {map, take} from "rxjs/operators";

import {Todo, TODOS_FEATURE_KEY, TodosPartialState} from './todos.reducer';
import {todosQuery} from './todos.selectors';
import {fromTodosActions} from './todos.actions';
import {TodosDataAccessService} from "../services/todos-data-access.service";

@Injectable()
export class TodosFacade {
  active$ = this.store.pipe(select(todosQuery.getActive));
  finished$ = this.store.pipe(select(todosQuery.getFinished));
  selected$ = this.store.pipe(select(todosQuery.getSelected));

  constructor(private store: Store<TodosPartialState>, private dataAccess: TodosDataAccessService) {}

  addTodo(todo: Todo) {
    this.store.dispatch(new fromTodosActions.AddTodo(todo));
  }
  editTodo(todo: Todo) {
    this.store.dispatch(new fromTodosActions.EditTodo(todo));
  }
  deleteTodo(id: number) {
    this.store.dispatch(new fromTodosActions.DeleteTodo(id));
  }
  selectTodo(todo: Todo) {
    this.store.dispatch(new fromTodosActions.SelectTodo(todo));
  }
  cancelTodoSelection() {
    this.store.dispatch(new fromTodosActions.CancelTodoSelection());
  }
  setTodoAsFinished(todo: Todo) {
    this.store.dispatch(new fromTodosActions.FinishTodo(todo));
  }

  getPersistedTodos() {
    //send action to trigger effect that sends action which has local storage todos in it
    this.store.dispatch(
      new fromTodosActions.LoadTodosFromLocalStorage()
    )
  }

}
