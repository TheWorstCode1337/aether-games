const HeaderHTML = () => {
    return `
    <div class="header__container">
      <a href="index.html" class="header__logo">AETHER</a>
      
      <nav class="header__nav">
        <a href="index.html" class="header__link active">Главная</a>
        <a href="./pages/games.html" class="header__link">Игры</a>
        <a href="./pages/about.html" class="header__link">О студии</a>
      </nav>

      <button class="header__burger" type="button" aria-label="Открыть меню" aria-expanded="false">
        <svg class="burger-icon" viewBox="0 0 24 24" aria-hidden="true">
          <path class="burger-line burger-line--top" d="M4 6H20"/>
          <path class="burger-line burger-line--middle" d="M4 12H20"/>
          <path class="burger-line burger-line--bottom" d="M4 18H20"/>
        </svg>
      </button>

      <button class="header__btn btn btn--primary">Связаться</button>
    </div>
    `
}

export const Header = HeaderHTML(); 