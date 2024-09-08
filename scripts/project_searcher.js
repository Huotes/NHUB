document.addEventListener('DOMContentLoaded', function () {
    const projectsContainer = document.getElementById('project-buttons');

    // Simula a busca de projetos. Em um ambiente real, você precisa de uma solução de backend para listar os diretórios.
    const projects = [
        'RalseiPage',
        'PandoraVB',
        'Portifolio',
        'GMP'
    ];

    projects.forEach(project => {
        const button = document.createElement('a');
        button.href = `/projects/${project}/index.html`;
        button.classList.add('btn', 'btn-project'); // Use the new button class
        button.textContent = project;
        projectsContainer.appendChild(button);
    });
});
