import { Component, OnInit, OnDestroy, signal, computed, effect, inject, ChangeDetectorRef, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface CarouselItem {
  id: string | number;
  image?: string;
  title?: string;
  description?: string;
  link?: string;
  [key: string]: any;
}

export interface CarouselConfig {
  autoplay?: boolean;
  autoplaySpeed?: number;
  showArrows?: boolean;
  showIndicators?: boolean;
  showTitle?: boolean;
  showDescription?: boolean;
  infinite?: boolean;
  responsive?: boolean;
  height?: string;
  width?: string;
}

@Component({
  selector: 'ng-custom-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './custom-carousel.component.html',
  styleUrls: ['./custom-carousel.component.scss']
})
export class NgCustomCarousel implements OnInit, OnDestroy {
  // Signal-based inputs
  items = input<CarouselItem[]>([]);
  config = input<CarouselConfig>({
    autoplay: true,
    autoplaySpeed: 5000,
    showArrows: true,
    showIndicators: true,
    showTitle: true,
    showDescription: true,
    infinite: true,
    responsive: true,
    height: '400px',
    width: '100%'
  });

  // Signal-based outputs
  slideChange = output<{ currentIndex: number; item: CarouselItem }>();
  carouselClick = output<CarouselItem>();

  private autoplayInterval?: number;
  private cdr = inject(ChangeDetectorRef);

  // Internal signals
  currentIndex = signal(0);
  isTransitioning = signal(false);
  
  // Computed signals
  progressWidth = computed(() => {
    if (!this.config().autoplay || this.items().length <= 1) return 0;
    return ((this.currentIndex() + 1) / this.items().length) * 100;
  });

  ngOnInit() {
    this.setupAutoplay();
  }

  ngOnDestroy() {
    this.clearAutoplay();
  }

  next() {
    if (this.items().length <= 1) return;
    
    this.isTransitioning.set(true);
    const nextIndex = this.config().infinite && this.currentIndex() === this.items().length - 1 
      ? 0 
      : Math.min(this.currentIndex() + 1, this.items().length - 1);
    
    this.goToSlide(nextIndex);
  }

  previous() {
    if (this.items().length <= 1) return;
    
    this.isTransitioning.set(true);
    const prevIndex = this.config().infinite && this.currentIndex() === 0 
      ? this.items().length - 1 
      : Math.max(this.currentIndex() - 1, 0);
    
    this.goToSlide(prevIndex);
  }

  goToSlide(index: number) {
    if (index < 0 || index >= this.items().length || index === this.currentIndex()) return;
    
    this.currentIndex.set(index);
    this.slideChange.emit({ currentIndex: index, item: this.items()[index] });
    
    // Reset autoplay progress
    if (this.config().autoplay) {
      this.resetAutoplay();
    }
    
    // Reset transition state after animation
    setTimeout(() => {
      this.isTransitioning.set(false);
    }, 500);
  }

  trackByFn(index: number, item: CarouselItem): string | number {
    return item.id;
  }

  onItemClick(item: CarouselItem) {
    this.carouselClick.emit(item);
  }

  private setupAutoplay() {
    if (!this.config().autoplay || this.items().length <= 1) return;
    
    this.autoplayInterval = window.setInterval(() => {
      this.next();
    }, this.config().autoplaySpeed);
  }

  private resetAutoplay() {
    this.clearAutoplay();
    this.setupAutoplay();
  }

  private clearAutoplay() {
    if (this.autoplayInterval) {
      clearInterval(this.autoplayInterval);
      this.autoplayInterval = undefined;
    }
  }
}
