document.addEventListener('DOMContentLoaded', () => {
    // Gráfico
    const ctx = document.getElementById('trafficChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Campanha 1', 'Campanha 2', 'Campanha 3'],
            datasets: [{
                label: 'Resultados (%)',
                data: [75, 60, 90],
                backgroundColor: ['#1E90FF', '#FFD700', '#FF5733']
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { display: true, position: 'top' }
            },
            scales: { y: { beginAtZero: true } }
        }
    });

    // Animação da introdução
    const introSection = document.querySelector('.intro-content');
    introSection.style.opacity = '0';
    introSection.style.transform = 'translateY(20px)';

    setTimeout(() => {
        introSection.style.opacity = '1';
        introSection.style.transform = 'translateY(0)';
        introSection.style.transition = 'opacity 1s, transform 1s';
    }, 300);

    // Efeito de rolagem para revelar elementos
    const sections = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.5 });

    sections.forEach(section => observer.observe(section));
});

// Função do botão de FAQ
function toggleAnswer(button) {
    const answer = button.nextElementSibling;
    const isVisible = answer.style.display === 'block';
    answer.style.display = isVisible ? 'none' : 'block';
}
