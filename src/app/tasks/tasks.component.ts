import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { type NewTaskData } from './task/task.model';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name: string | undefined;
  @Output() select = new EventEmitter<string>();
  isAddingTask = false;

  onSelectUser() {
    this.select.emit(this.name);
  }

  tasks = [
    {
      id: 't1',
      userId: 'u3',
      title: 'Master Angular',
      summary: 'Do somrthing',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Master Angular',
      summary: 'Do somrthing',
      dueDate: '2025-12-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Master Angular',
      summary: 'Do somrthing',
      dueDate: '2025-12-31',
    },
  ];

  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.userId);
  }

  onCompleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCancelNewTask() {
    this.isAddingTask = false;
  }

  onAddTask(taskData: NewTaskData) {
    this.tasks.push({
      id: new Date().getTime().toString(),
      userId: this.userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.dueDate
    })
    this.isAddingTask = false;
  }
}
