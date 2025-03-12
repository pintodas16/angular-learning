import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { ModaltwoComponent } from '../modaltwo/modaltwo.component';
@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-our-mission',
  imports: [ModalComponent, ModaltwoComponent],
  templateUrl: './our-mission.component.html',
  styleUrl: './our-mission.component.scss',
})
export class OurMissionComponent {
  showModal = false;

  openModal() {
    this.showModal = true;
  }
  handleClose() {
    this.showModal = false;
    console.log('clidk in the close icon');
  }
}
