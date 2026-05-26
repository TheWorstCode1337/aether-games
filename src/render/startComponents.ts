import { setupMobileMenu } from "../components/Header/burgerMenu";
import { Header } from "../components/Header/Header";
import '../../scss/header.scss';

const mountHeader = () => {
    const root = document.querySelector<HTMLElement>('#header');

    if (!root) return;

    root.innerHTML = Header();
    setupMobileMenu();
}

mountHeader();