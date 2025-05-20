import { Injectable, NotFoundException ,BadRequestException} from '@nestjs/common';
import { Todo } from './todo.type';
import { Status } from './todo.type';

@Injectable()
export class TodoService {
  private todos: Todo[];
  constructor() {
    this.todos = [];
  }

  getAllTodos() {
    return this.todos;
  }

  addTodo(todo: Todo) {
    if (!Object.values(Status).includes(todo.status)) {
      throw new BadRequestException('Invalid status value');
    }
    this.todos.push(todo);
    return 'Todo added successfully';
  }
  getTodoById(id: number) {
    const todo = this.todos.find((todo) => todo.id === id);
    if (!todo) {
      throw  new NotFoundException('Todo not found');
    }
    return todo;
  }

  updateTodo(id: number, updatedTodo: Todo) {
    if (!Object.values(Status).includes(updatedTodo.status)) {
      throw new BadRequestException('Invalid status value');
    }
    const todoIndex = this.todos.findIndex((todo) => todo.id === id);
    if (todoIndex === -1) {
      throw new NotFoundException('Todo not found');
    }
    this.todos[todoIndex] = { ...this.todos[todoIndex], ...updatedTodo };
    return 'Todo updated successfully';
  }
  deleteTodo(id: number) {
    // const todoIndex = this.todos.findIndex((todo) => todo.id === id);
    // if (todoIndex === -1) {
    //   return 'Todo not found';
    // }
    // this.todos.splice(todoIndex, 1);
    this.todos = this.todos.filter((todo) => todo.id !== id);
    return 'Todo deleted successfully';
  }
}