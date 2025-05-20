export enum Status {
  TODO = 'todo',
  IN_PROGRESS = 'in-progress',
  DONE = 'done',
}

export class Todo {
  id: number;
  task: string;
  status: Status;
}