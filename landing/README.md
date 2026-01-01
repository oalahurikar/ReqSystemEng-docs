# ReqDrivenDev Landing Page

A modern, responsive landing page showcasing data visualization charts that demonstrate the cost of requirement drift.

## Features

- **Waterfall Chart**: Annual cost breakdown of requirement drift
- **Donut Chart**: Issues discovered late vs. early
- **Horizontal Bar Chart**: Time to answer impact (Before vs. After)
- **KPI Tiles**: Key performance indicators displayed in a responsive grid

## Tech Stack

- **Vanilla JavaScript** - No framework overhead
- **Vite** - Fast development server and optimized builds
- **Chart.js** - Powerful charting library

## Setup

### Prerequisites

- Node.js (v16 or higher)
- npm (v7 or higher)

### Installation

1. Navigate to the landing page directory:
```bash
cd website/landing
```

2. Install dependencies:
```bash
npm install
```

## Development

Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173` (or the next available port).

## Building for Production

Build the production-ready static files:
```bash
npm run build
```

The output will be in the `dist/` directory.

Preview the production build:
```bash
npm run preview
```

## Customizing Chart Data

Chart data is configured in `src/data/chartData.js`. You can modify:

- **Waterfall chart data**: Update the `waterfall.data` array with your cost values
- **Donut chart data**: Adjust `donut.foundEarly` and `donut.foundLate` percentages
- **Bar chart data**: Modify `bar.before` and `bar.after` time values
- **KPI tiles**: Update the `kpi` array with your key metrics

Example:
```javascript
export const chartData = {
    waterfall: {
        data: [
            { value: 12000, label: 'Impact analysis', color: '#3b82f6' },
            // ... more items
        ]
    },
    donut: {
        foundEarly: 68,
        foundLate: 32
    },
    // ... etc
};
```

## Deployment

### Static Hosting

The built files in `dist/` can be deployed to any static hosting service:

- **GitHub Pages**: Push `dist/` contents to `gh-pages` branch
- **Netlify**: Connect your repository and set build command to `npm run build`
- **Vercel**: Connect your repository and set build command to `npm run build`
- **AWS S3**: Upload `dist/` contents to an S3 bucket configured for static hosting

### GitHub Pages Subdirectory

If deploying to a GitHub Pages subdirectory (e.g., `/ReqDrivenDev/`), uncomment the `base` option in `vite.config.js`:

```javascript
export default defineConfig({
  base: '/ReqDrivenDev/',
  // ... rest of config
});
```

## Project Structure

```
landing/
├── index.html              # Main HTML file
├── package.json            # Dependencies and scripts
├── vite.config.js          # Vite configuration
├── src/
│   ├── main.js            # Application entry point
│   ├── charts/
│   │   ├── waterfall.js   # Waterfall chart implementation
│   │   ├── donut.js       # Donut chart implementation
│   │   └── bar.js         # Horizontal bar chart implementation
│   ├── data/
│   │   └── chartData.js   # Chart data and formatting utilities
│   ├── components/
│   │   └── kpiTiles.js    # KPI tiles component
│   └── styles/
│       └── main.css       # Main stylesheet
└── public/                # Static assets (if any)
```

## Browser Support

Modern browsers that support ES6 modules:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Part of the ReqDrivenDev project.
