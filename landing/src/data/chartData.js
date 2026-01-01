/**
 * Chart data configuration and formatting utilities
 */

// Format currency values
export function formatCurrency(value) {
    if (value >= 1000000) {
        return `$${(value / 1000000).toFixed(1)}M`;
    } else if (value >= 1000) {
        return `$${(value / 1000).toFixed(1)}k`;
    }
    return `$${value}`;
}

// Format time values
export function formatTime(hours) {
    return `${hours.toFixed(1)} hrs`;
}

// Chart data configuration
export const chartData = {
    waterfall: {
        labels: [
            'Impact analysis',
            'Alignment meetings',
            'Rework from late surprises',
            'Integration delay',
            'Prototype / re-spin',
            'Total annual cost'
        ],
        data: [
            { value: 12000, label: 'Impact analysis', color: '#3b82f6' },
            { value: 18000, label: 'Meetings', color: '#8b5cf6' },
            { value: 45000, label: 'Rework', color: '#ef4444' },
            { value: 32000, label: 'Delay', color: '#f59e0b' },
            { value: 15000, label: 'Re-spin', color: '#10b981' }
        ]
    },
    donut: {
        foundEarly: 68,
        foundLate: 32
    },
    bar: {
        before: 18.0,
        after: 0.5
    },
    kpi: [
        { value: '120', label: 'Changes/month' },
        { value: '3.2', label: 'Avg rework hours/change' },
        { value: '32%', label: 'Late discovery rate' },
        { value: '9 days', label: 'Integration slip/quarter' }
    ]
};
