import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-card-slider',
  imports: [CommonModule],
  templateUrl: './card-slider.component.html',
  styleUrl: './card-slider.component.scss',
})
export class CardSliderComponent implements OnInit, OnDestroy {
  cards: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // The cards represented by numbers
  visibleCards: number[] = this.cards.slice(0, 5); // Initially, show the first 5 cards
  private sliderInterval: any;

  constructor() {}

  ngOnInit(): void {
    this.startSlider();
  }

  ngOnDestroy(): void {
    // Clean up the interval when the component is destroyed to avoid memory leaks
    if (this.sliderInterval) {
      clearInterval(this.sliderInterval);
    }
  }

  startSlider(): void {
    // Update visible cards every second
    this.sliderInterval = setInterval(() => {
      this.updateVisibleCards();
    }, 1000);
  }

  updateVisibleCards(): void {
    // Shift the visible cards by removing the first card and adding the next one
    this.visibleCards = [
      ...this.visibleCards.slice(1),
      this.cards[
        this.cards.indexOf(this.visibleCards[this.visibleCards.length - 1]) + 1
      ] || this.cards[0],
    ];
  }
}
