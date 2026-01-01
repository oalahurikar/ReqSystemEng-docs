import { Chart, registerables } from 'chart.js';
import { formatCurrency } from '../data/chartData.js';

Chart.register(...registerables);

/**
 * Creates a waterfall chart showing annual cost of requirement drift
 * @param {string} canvasId - ID of the canvas element
 * @param {Object} data - Chart data object with labels and data array
 */
export function createWaterfallChart(canvasId, data) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) {
        console.error(`Canvas element with id "${canvasId}" not found`);
        return null;
    }

    const ctx = canvas.getContext('2d');

    // Calculate cumulative values for waterfall effect
    const waterfallValues = [];
    let runningTotal = 0;
    
    data.data.forEach((item, index) => {
        waterfallValues.push({
            start: runningTotal,
            end: runningTotal + item.value,
            value: item.value,
            label: item.label,
            color: item.color
        });
        runningTotal += item.value;
    });

    // Add total bar
    waterfallValues.push({
        start: 0,
        end: runningTotal,
        value: runningTotal,
        label: 'Total annual cost',
        color: '#dc2626',
        isTotal: true
    });

    return new Chart(ctx, {
        type: 'bar',
        data: {
            labels: data.labels,
            datasets: [{
                label: 'Cost',
                data: waterfallValues.map(v => v.value),
                backgroundColor: waterfallValues.map(v => v.color),
                borderColor: '#fff',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                title: {
                    display: false
                },
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const item = waterfallValues[context.dataIndex];
                            return [
                                `Cost driver: ${item.label}`,
                                `Annual cost: ${formatCurrency(item.value)}`,
                                `Based on your inputs: changes/month × hours/change × loaded rate`
                            ];
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Annual cost (USD)'
                    },
                    ticks: {
                        callback: function(value) {
                            return formatCurrency(value);
                        }
                    }
                },
                x: {
                    ticks: {
                        maxRotation: 45,
                        minRotation: 45
                    }
                }
            }
        }
    });
}
