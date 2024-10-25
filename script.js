document.getElementById('show-resources').addEventListener('click', function() {
    const resourcesList = document.getElementById('resources-list');
    if (resourcesList.style.display === 'none') {
        resourcesList.style.display = 'block';
        this.textContent = 'Hide Study Resources';
    } else {
        resourcesList.style.display = 'none';
        this.textContent = 'Show Study Resources';
    }
});
