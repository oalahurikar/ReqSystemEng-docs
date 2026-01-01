import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

/**
 * Creates a donut chart showing issues discovered late
 * @param {string} canvasId - ID of the canvas element
 * @param {Object} data - Chart data object with foundEarly and foundLate percentages
 * @param {string} centerValueId - ID of the element to display center value
 */
export function createDonutChart(canvasId, data, centerValueId) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) {
        console.error(`Canvas element with id "${canvasId}" not found`);
        return null;
    }

    const ctx = canvas.getContext('2d');

    // Update center label
    const centerElement = document.getElementById(centerValueId);
    if (centerElement) {
        centerElement.textContent = `Late: ${data.foundLate}%`;
    }

    // Calculate issues per quarter (assuming 250 issues per quarter total)
    const totalIssuesPerQuarter = 250;
    const lateIssuesPerQuarter = Math.round((data.foundLate / 100) * totalIssuesPerQuarter);

    return new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Found early (design / review)', 'Found late (integration / prototype / system test)'],
            datasets: [{
                data: [data.foundEarly, data.foundLate],
                backgroundColor: ['#10b981', '#dc2626'],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            cutout: '70%',
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 15,
                        font: {
                            size: 12
                        }
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const label = context.label || '';
                            const value = context.parsed || 0;
                            const issuesCount = Math.round((value / 100) * totalIssuesPerQuarter);
                            return `Share of issues: ${value}% (${issuesCount} issues/quarter)`;
                        }
                    }
                }
            }
        }
    });
}
