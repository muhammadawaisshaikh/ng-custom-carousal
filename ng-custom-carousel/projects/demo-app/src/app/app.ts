import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgCustomCarousel, CarouselItem, CarouselConfig } from '../../../custom-carousel/src/lib/custom-carousel';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, NgCustomCarousel],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('ng-custom-carousel Demo');

  carouselItems: CarouselItem[] = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop',
      title: 'Mountain Adventure',
      description: 'Explore the breathtaking mountain landscapes and discover hidden trails.',
      link: 'https://example.com/mountain-adventure'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&h=600&fit=crop',
      title: 'Forest Retreat',
      description: 'Immerse yourself in the tranquility of ancient forests and wildlife.',
      link: 'https://example.com/forest-retreat'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop',
      title: 'Ocean Waves',
      description: 'Feel the power of the ocean and watch the waves crash against the shore.',
      link: 'https://example.com/ocean-waves'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&h=600&fit=crop',
      title: 'City Lights',
      description: 'Experience the vibrant energy of the city at night.',
      link: 'https://example.com/city-lights'
    }
  ];

  carouselConfig: CarouselConfig = {
    autoplay: true,
    autoplaySpeed: 4000,
    showArrows: true,
    showIndicators: true,
    showTitle: true,
    showDescription: true,
    infinite: true,
    responsive: true,
    height: '500px',
    width: '100%'
  };

  onSlideChange(event: { currentIndex: number; item: CarouselItem }) {
    console.log('Slide changed to:', event.currentIndex, event.item);
  }

  onCarouselClick(item: CarouselItem) {
    console.log('Carousel item clicked:', item);
    // You can navigate to the link or perform any action
    if (item.link) {
      window.open(item.link, '_blank');
    }
  }
}
