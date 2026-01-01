import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

/**
 * Creates a horizontal bar chart showing time to answer impact
 * @param {string} canvasId - ID of the canvas element
 * @param {Object} data - Chart data object with before and after values
 */
export function createBarChart(canvasId, data) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) {
        console.error(`Canvas element with id "${canvasId}" not found`);
        return null;
    }

    const ctx = canvas.getContext('2d');

    return new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Before (today)', 'After (with Nexus)'],
            datasets: [{
                label: 'Time (hours)',
                data: [data.before, data.after],
                backgroundColor: ['#dc2626', '#10b981'],
                borderColor: '#fff',
                borderWidth: 2
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `Median time per change: ${context.parsed.x.toFixed(1)} hrs`;
                        }
                    }
                }
            },
            scales: {
                x: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Time (hours)'
                    },
                    ticks: {
                        callback: function(value) {
                            return `${value.toFixed(1)} hrs`;
                        }
                    }
                },
                y: {
                    ticks: {
                        font: {
                            size: 12
                        }
                    }
                }
            }
        }
    });
}
