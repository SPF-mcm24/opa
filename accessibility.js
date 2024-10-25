//acessibilty.js
document.getElementById('color-blind-toggle').addEventListener('click', function() {
    document.getElementById('color-blind-options').classList.toggle('hidden');
});

document.querySelectorAll('#color-blind-options button').forEach(button => {
    button.addEventListener('click', function() {
        const filter = this.getAttribute('data-filter');
        const className = filter === 'normal' ? '' : `color-blind-filter ${filter}`;
        
        document.getElementById('content-wrapper').className = className;
        document.querySelector('.navbar').className = 
            `navbar ${className}`; // Mantém a classe navbar
        console.log("chegou aqui")
        
        
        document.getElementById('color-blind-options').classList.add('hidden');
    });
});