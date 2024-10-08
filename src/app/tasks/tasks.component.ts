import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input() name: string | undefined;
  @Output() select = new EventEmitter<string>();

  onSelectUser() {
    this.select.emit(this.name);
  }
}
