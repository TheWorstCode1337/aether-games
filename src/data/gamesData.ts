export interface GameItem {
  title: string;
  genre: string;
  year: string;
  description: string;
  image: string;
}

export const gamesData: GameItem[] = [
  {
    title: 'ECLIPSE',
    genre: 'Sci‑Fi Adventure',
    year: '2025',
    description:
      'Путешествие через разрушенные станции и забытые цивилизации.',
    image:
      'https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1400&auto=format&fit=crop',
  },
  {
    title: 'VOIDLINE',
    genre: 'Psychological Thriller',
    year: '2024',
    description:
      'Мрачная история о памяти, одиночестве и цифровых снах.',
    image:
      'https://images.unsplash.com/photo-1520034475321-cbe63696469a?q=80&w=1400&auto=format&fit=crop',
  },
  {
    title: 'ASHES OF TITAN',
    genre: 'Action RPG',
    year: '2026',
    description:
      'Сражения среди гигантских механизмов и разрушенных мегаполисов.',
    image:
      'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1400&auto=format&fit=crop',
  }
];