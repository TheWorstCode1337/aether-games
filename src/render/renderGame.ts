import { gamesData } from "../data/gamesData";
import { GameCard } from "../components/GameCard";

export const renderGames = ():void => {
    const gamesGrid = document.querySelector<HTMLElement>('#games-grid');

    if (!(gamesGrid instanceof HTMLElement)) throw new Error('Games grid not found');

    gamesGrid.innerHTML = gamesData
    .map((game) => GameCard(game))
    .join('');
}