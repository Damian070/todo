import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoContainerComponent } from './containers/todo-container/todo-container/todo-container.component';

@NgModule({
  imports: [CommonModule],
  declarations: [TodoContainerComponent]
})
export class TodoShellModule {}
