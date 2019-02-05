export const ADD_TODO = '[Todo] Add todo';
export const MARK_TODO = '[Todo] Mark todo';
export const REMOVE_TODO = '[Todo] Remove todo';


interface Action {
  readonly type: string;
}

export class AddTodo implements Action {
  readonly type = ADD_TODO;
  constructor(public payload: any) {}
}


export class RemoveTodo implements Action {
  readonly type = REMOVE_TODO;
  constructor(public payload: any) {}
}


export class MarkDone implements Action {
  readonly type = MARK_TODO;
  constructor(public payload: any) {}
}

