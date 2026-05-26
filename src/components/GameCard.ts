import type { GameItem } from "../data/gamesData";

export const GameCard = (game:GameItem):string => {
    return `
    <article class="game-card">
      <div class="game-card__visual">
        <img
          class="game-card__image"
          src="${game.image}"
          alt="${game.title}"
        />

      </div>

      <div class="game-card__content">
        <div class="game-card__meta">
          <span class="game-card__genre">${game.genre}</span>
          <span class="game-card__year">${game.year}</span>
        </div>

        <h2 class="game-card__title">
          ${game.title}
        </h2>

        <p class="game-card__description">
          ${game.description}
        </p>

        <button class="game-card__button btn btn--primary">
          Подробнее
        </button>
      </div>
    </article>
    `
}