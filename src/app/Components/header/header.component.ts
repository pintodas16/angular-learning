import { Component } from '@angular/core';
import { DrawerCartComponent } from '../drawer-cart/drawer-cart.component';
@Component({
  selector: 'app-header',
  imports: [DrawerCartComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
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
