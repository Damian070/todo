import { async, TestBed } from '@angular/core/testing';
import { TodoDataAccessModule } from './todo-data-access.module';

describe('TodoDataAccessModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TodoDataAccessModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(TodoDataAccessModule).toBeDefined();
  });
});
