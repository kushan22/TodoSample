import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';

export class Todo{
  constructor(public id:number, public todoDescription:string,public done:boolean,public targetDate:Date){

  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos: Todo[]
  message: string;
  

  constructor(private todoService:TodoDataService,private router: Router) { }

  refreshTodos(){
    this.todoService.retrieveAllTodos('kushansingh').subscribe(
      response => {
        console.log(response);
        this.todos = response;
      }
    )
  }

  ngOnInit() {
    this.refreshTodos();
  }

  deleteTodo(id){
    console.log(`delete Todo ${id}`);
    this.todoService.deleteTodo("kushan singh",id).subscribe(
      response => {
        console.log(response);
        this.message = `Delete Successful of ${id}`;
        this.refreshTodos();
      }
    )
  }

  updateTodo(id){
    console.log(`Update Todo ${id}`);
    this.router.navigate(['todos',id]);
  }

  addTodo(){
    this.router.navigate(['todos',-1]);
  }

}
