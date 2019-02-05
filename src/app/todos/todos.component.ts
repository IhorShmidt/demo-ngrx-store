import {Component, OnInit, ViewChild} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';
import {AddTodo, MarkDone, RemoveTodo} from '../todos-store/todos.actions';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  todos$: Observable<any>;


  @ViewChild('userInput') userInput;

  constructor(private store: Store<any>) {
  }

  ngOnInit() {
    this.todos$ = this.store.select('todos').pipe(
      tap(x => {
        console.log('-----------------------')
        console.log(x)
      }),
      map(state => state.data)
    );
  }

  addAtodo(value: string) {
    if (!value.length) {
      return;
    }

    const payload = {
      complete: false,
      label: value
    };
    // this.store.dispatch({
    //   type: 'ADD_TODO',
    //   payload
    // });
    this.store.dispatch(new AddTodo(payload));

    this.userInput.nativeElement.value = '';
  }

  removeTodo(todo ) {
    this.store.dispatch(new RemoveTodo(todo));
  }

  markDone(todo ) {
    this.store.dispatch(new MarkDone(todo));
  }
}
