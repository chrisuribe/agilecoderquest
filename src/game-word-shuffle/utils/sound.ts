export const inputSoundUrl =
  '/src/game-word-shuffle/sounds/sound-effects/25371__breviceps__clicks-buttons-ui-sounds/448081__breviceps__tic-toc-click.wav';

export const playSound = (soundUrl: string) => {
  const audio = new Audio(soundUrl);
  audio.play().catch((err) => alert(err));
};
