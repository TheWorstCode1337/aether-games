import { setupMobileMenu } from "../components/Header/burgerMenu";
import { Header } from "../components/Header/Header";
import '../../scss/header.scss';
import { setActiveNav } from "../components/Header/setActiveNav";

const mountHeader = () => {
    const root = document.querySelector<HTMLElement>('#header');

    if (!root) return;

    root.innerHTML = Header();
    setActiveNav();
    setupMobileMenu();
}

mountHeader();