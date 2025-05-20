import { Body, Controller, Get, Param, Patch, Post , Delete} from '@nestjs/common';
import { TodoService } from './todo.service';
import { Todo } from './todo.type';

@Controller('todo')
export class TodoController {
  constructor(private todoService: TodoService) {}
  @Get()
  getAllTodos(): Todo[] | string {
    return this.todoService.getAllTodos();
  }

  @Post()
  addTodo(@Body() todo: Todo) { 
    return this.todoService.addTodo(todo);
  }
  @Patch(':id')
  updateTodo(@Body() updatedTodo: Todo, @Param('id') id: number) {
    return this.todoService.updateTodo(+id, updatedTodo);
  }

  @Delete(':id')
  deleteTodo(@Param('id') id: number) {
    return this.todoService.deleteTodo(+id);
  }
  @Get(':id')
  getTodoById(@Param('id') id: number): Todo {
    return this.todoService.getTodoById(+id);
  }
}