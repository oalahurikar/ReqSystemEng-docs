/**
 * Renders KPI tiles in a grid layout
 * @param {string} containerId - ID of the container element
 * @param {Array} data - Array of KPI objects with value and label properties
 */
export function renderKPITiles(containerId, data) {
    const container = document.getElementById(containerId);
    if (!container) {
        console.error(`Container element with id "${containerId}" not found`);
        return;
    }

    // Clear existing content
    container.innerHTML = '';

    // Create KPI tiles
    data.forEach(kpi => {
        const tile = document.createElement('div');
        tile.className = 'kpi-tile';
        
        const valueElement = document.createElement('div');
        valueElement.className = 'kpi-value';
        valueElement.textContent = kpi.value;
        
        const labelElement = document.createElement('div');
        labelElement.className = 'kpi-label';
        labelElement.textContent = kpi.label;
        
        tile.appendChild(valueElement);
        tile.appendChild(labelElement);
        container.appendChild(tile);
    });
}
