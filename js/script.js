// Configuração inicial
document.addEventListener('DOMContentLoaded', function() {
    // Atualiza o ano atual no footer
    document.getElementById('current-year').textContent = new Date().getFullYear();

    // Carrega projetos dinamicamente
    const projects = [
        {
            title: "Visão Computacional",
            image: "assets/images/Computer-Vision-.jpg",
            description: "Desenvolvi um projeto em Python que utiliza Inteligência Artificial para realizar a contagem de pessoas em vídeos em tempo real. O sistema emprega o modelo YOLO (You Only Look Once) para detectar indivíduos nas imagens, enquanto a biblioteca OpenCV desenha caixas delimitadoras ao redor de cada pessoa e exibe a confiança da detecção. Além disso, um contador no canto do vídeo atualiza, em tempo real, o número de pessoas presentes na cena."
        },
        // Adicione mais projetos aqui
    ];

    const grid = document.querySelector('.projects-grid');
    projects.forEach(project => {
        grid.innerHTML += `
            <div class="project-card">
                <img src="${project.image}" alt="${project.title}" class="project-img">
                <div class="project-info">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                </div>
            </div>
        `;
    });

    // Smooth scroll para links de navegação
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const section = document.querySelector(this.getAttribute('href'));
            section.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Form submission
    document.querySelector('.contact-form').addEventListener('submit', function(e) {
        e.preventDefault();
        // Adicione aqui a lógica de envio do formulário
        alert('Mensagem enviada com sucesso!');
        this.reset();
    });
});