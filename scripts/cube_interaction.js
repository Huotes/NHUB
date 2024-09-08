document.addEventListener('DOMContentLoaded', function () {
    const cube = document.getElementById('cube');
    const projectButtons = document.getElementById('project-buttons');

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
        button.classList.add('btn', 'btn-project'); // Use a nova classe de botão
        button.textContent = project;
        projectButtons.appendChild(button);
    });

    // Adiciona o evento de clique no cubo
    cube.addEventListener('click', function () {
        if (cube.classList.contains('broken')) {
            cube.classList.remove('broken');
        } else {
            cube.classList.add('broken');
        }
    });
});
