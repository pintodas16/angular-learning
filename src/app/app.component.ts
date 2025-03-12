import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './Components/header/header.component';
import { DataService } from './data.service';
import { CardSliderComponent } from './Components/card-slider/card-slider.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, CardSliderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'package-learning';
  items: any[] = [];
  constructor(private dataservice: DataService) {}
  async ngOnInit() {
    try {
      const response = await this.dataservice.getData();
      this.items = response.data; // Now 'data' is typed as Item[]
      console.log(this.items); // Log the array of items
    } catch (error) {
      console.error('Error loading data', error);
    }
  }
}
