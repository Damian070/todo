import {Todo} from "./todo.interface";

export  default interface TodoListInterface {
  finished: Todo[],
  active: Todo[],
  selected: Todo | null
}
