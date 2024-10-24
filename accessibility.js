document.getElementById('color-blind-toggle').addEventListener('click', function() {
    document.getElementById('color-blind-options').classList.toggle('hidden');
});

document.querySelectorAll('#color-blind-options button').forEach(button => {
    button.addEventListener('click', function() {
        const filter = this.getAttribute('data-filter');
        document.body.className = filter === 'normal' ? '' : `color-blind-filter ${filter}`;
        document.getElementById('color-blind-options').classList.add('hidden');
    });
});

