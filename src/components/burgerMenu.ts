const burger = document.querySelector('.header__burger') as HTMLButtonElement | null;
const mobileNav = document.querySelector('.mobile-nav') as HTMLButtonElement | null;
const mobileLinks = document.querySelectorAll('.mobile-nav__link, .mobile-nav__btn');

if (burger && mobileNav) {
    const openMenu = () => {
        mobileNav.hidden = false;
        document.body.classList.add('menu-open');
        burger.setAttribute('aria-expanded', 'true');
        burger.setAttribute('aria-label', 'Закрыть меню');
    };
    const closeMenu = () => {
        document.body.classList.remove('menu-open');
        burger.setAttribute('aria-expanded', 'false');
        burger.setAttribute('aria-label', 'Открыть меню');

        window.setTimeout(() => {
            if (!document.body.classList.contains('menu-open')) mobileNav.hidden = true;
        }, 250);
    }

    burger.addEventListener("click", () => {
        if (document.body.classList.contains('menu-open')) closeMenu();
        else openMenu();
    });

    mobileLinks.forEach((item) => {
        item.addEventListener('click', () => {
            closeMenu();
        });
    });

    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && document.body.classList.contains('menu-open')) closeMenu();
    });
}