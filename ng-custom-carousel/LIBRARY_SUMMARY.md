# ng-custom-carousel Library Summary

## 🎯 Project Overview

This repository contains a modern, customizable carousel component for Angular 20+ that can be published as an npm package. The library is built using Angular's latest features including signals, standalone components, and modern build tools.

## 🏗️ Project Structure

```
ng-custom-carousel/
├── projects/
│   ├── custom-carousel/          # The main library
│   │   ├── src/
│   │   │   ├── lib/
│   │   │   │   ├── custom-carousel.component.html    # HTML template
│   │   │   │   ├── custom-carousel.component.scss    # SCSS styles
│   │   │   │   └── custom-carousel.ts                # Main component
│   │   │   └── public-api.ts                         # Public exports
│   │   ├── package.json                              # Library package.json
│   │   └── ng-package.json                           # ng-packagr config
│   └── demo-app/                    # Demo application
│       ├── src/
│       │   ├── app/
│       │   │   ├── app.ts                            # Demo component (merged)
│       │   │   ├── app.html                          # Demo template (merged)
│       │   │   └── app.scss                          # Demo styles (merged)
│       │   └── main.ts                               # Demo entry point
│       └── package.json                              # Demo package.json
├── scripts/                         # Publishing scripts
│   ├── publish.sh                   # Unix/Linux publish script
│   └── publish.bat                  # Windows publish script
├── package.json                     # Root package.json
├── angular.json                     # Angular workspace config
├── tsconfig.json                    # TypeScript config
└── README.md                        # Main documentation
```

## 🚀 Key Features

### Signal-based Architecture
- Uses Angular 20+ `input()` and `output()` functions
- Reactive state management with signals
- Computed values for derived state

### Component Features
- **Autoplay**: Configurable autoplay with progress bar
- **Navigation**: Previous/Next arrows with infinite loop support
- **Indicators**: Clickable slide indicators
- **Responsive**: Mobile-first design with responsive breakpoints
- **Accessible**: ARIA labels and keyboard navigation
- **Customizable**: Extensive configuration options
- **No Dependencies**: Pure Angular + SCSS implementation

### Configuration Options
```typescript
interface CarouselConfig {
  autoplay?: boolean;           // Enable/disable autoplay
  autoplaySpeed?: number;       // Autoplay interval (ms)
  showArrows?: boolean;         // Show navigation arrows
  showIndicators?: boolean;     // Show slide indicators
  showTitle?: boolean;          // Show slide titles
  showDescription?: boolean;    // Show slide descriptions
  infinite?: boolean;           // Enable infinite loop
  responsive?: boolean;         // Enable responsive behavior
  height?: string;              // Carousel height
  width?: string;               // Carousel width
}
```

## 📦 Building and Publishing

### Development Commands
```bash
# Install dependencies
npm install

# Build library
npm run build:lib

# Build demo app
npm run build:demo

# Start demo app
npm start

# Watch mode for development
npm run watch

# Run tests
npm run test
```

### Publishing to npm
```bash
# Build for production
npm run package

# Navigate to dist directory
cd dist/custom-carousel

# Publish to npm
npm publish

# Or use the publish scripts
./scripts/publish.sh      # Unix/Linux
scripts/publish.bat       # Windows
```

## 🎨 Styling

The carousel uses custom SCSS with:
- CSS custom properties for theming
- Responsive breakpoints (768px, 480px)
- Modern CSS features (backdrop-filter, transitions)
- BEM-like naming convention with `ng-carousel-` prefix
- No external CSS frameworks or dependencies

## 🔧 Usage Example

```typescript
import { NgCustomCarousel, CarouselItem, CarouselConfig } from 'ng-custom-carousel';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [NgCustomCarousel],
  template: `
    <ng-custom-carousel 
      [items]="carouselItems" 
      [config]="carouselConfig"
      (slideChange)="onSlideChange($event)"
      (carouselClick)="onCarouselClick($event)">
    </ng-custom-carousel>
  `
})
export class ExampleComponent {
  carouselItems: CarouselItem[] = [
    {
      id: 1,
      image: 'path/to/image.jpg',
      title: 'Slide Title',
      description: 'Slide description',
      link: 'https://example.com'
    }
  ];

  carouselConfig: CarouselConfig = {
    autoplay: true,
    autoplaySpeed: 5000,
    showArrows: true,
    showIndicators: true,
    height: '400px',
    width: '100%'
  };
}
```

## 🌐 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 📋 Requirements

- Node.js 18+
- Angular CLI 20+
- Angular 20+

## 🔗 Links

- **GitHub**: https://github.com/muhammadawaisshaikh/ng-custom-carousel
- **npm**: https://www.npmjs.com/package/ng-custom-carousel (after publishing)
- **Demo**: Run `npm start` to view the demo application

## 📝 License

MIT License - see [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 🆘 Support

- Open an issue on GitHub
- Check the demo application for examples
- Review the README.md for detailed documentation

---

**Built with ❤️ using Angular 20+ and modern web technologies** 