export const setActiveNav = () => {
    const path = window.location.pathname;

    const links = document.querySelectorAll<HTMLAnchorElement>('.header__link');

    links.forEach(link => {
        const href = link.getAttribute('href');

        link.classList.remove('active');

        if (path.endsWith('games.html') && href?.includes('games')) {
            link.classList.add('active');
        }

        if (path.endsWith('about.html') && href?.includes('about')) {
            link.classList.add('active');
        }

        if ((path === '/' || path.endsWith('index.html')) && href?.includes('index')) {
            link.classList.add('active');
        }
    });
};