import './styles/main.css';
import { chartData } from './data/chartData.js';
import { createWaterfallChart } from './charts/waterfall.js';
import { createDonutChart } from './charts/donut.js';
import { createBarChart } from './charts/bar.js';
import { renderKPITiles } from './components/kpiTiles.js';

/**
 * Initialize all charts and components after DOM is loaded
 */
function init() {
    try {
        // Render KPI tiles
        renderKPITiles('kpi-tiles', chartData.kpi);

        // Initialize charts
        createWaterfallChart('waterfallChart', chartData.waterfall);
        createDonutChart('donutChart', chartData.donut, 'donut-center-value');
        createBarChart('barChart', chartData.bar);
    } catch (error) {
        console.error('Error initializing charts:', error);
    }
}

// Wait for DOM to be fully loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    // DOM is already loaded
    init();
}
