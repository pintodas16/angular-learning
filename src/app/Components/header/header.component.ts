import { Component, Input } from '@angular/core';
import { DrawerCartComponent } from '../drawer-cart/drawer-cart.component';
import { OurMissionComponent } from '../our-mission/our-mission.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-header',
  imports: [CommonModule, DrawerCartComponent, OurMissionComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @Input() items: any[] = [];
  constructor() {
    console.log(this.items);
  }
  isDrawerOpen = false;

  openDrawer(): void {
    console.log('drawer is opening!');
    this.isDrawerOpen = true;
  }

  closeDrawer(): void {
    console.log('drawer is closing');
    this.isDrawerOpen = false;
  }
}
