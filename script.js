// Obtém os elementos do DOM
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const sidebar = document.getElementById('sidebar');

// Adiciona um listener de evento para o clique no ícone do menu
mobileMenuToggle.addEventListener('click', () => {
    // Alterna a classe 'active' no menu lateral
    sidebar.classList.toggle('active');
});
