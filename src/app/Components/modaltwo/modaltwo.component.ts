import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-modaltwo',
  imports: [CommonModule],
  templateUrl: './modaltwo.component.html',
  styleUrl: './modaltwo.component.scss',
})
export class ModaltwoComponent {
  @Input() isModalshow: boolean = false;
  @Output() closeModal = new EventEmitter();
  closebtn(): void {
    this.closeModal.emit();
  }
}
