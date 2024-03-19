import React, { useState, createContext, ReactNode } from 'react';

// Define the type for the context value
type GameContextType = {
  soundEnabled: boolean;
  setSoundEnabled: (value: boolean) => void;
  musicEnabled: boolean;
  setMusicEnabled: (value: boolean) => void;
};

// initial context values
const GameContext = createContext<GameContextType>({
  soundEnabled: true,
  setSoundEnabled: () => {},
  musicEnabled: true,
  setMusicEnabled: () => {},
});

// Provider Component
type GameProviderProps = {
  children: ReactNode;
};

const GameProvider: React.FC<GameProviderProps> = ({ children }) => {
  // These will overwrite initial context values
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [musicEnabled, setMusicEnabled] = useState<boolean>(true);

  const value = {
    soundEnabled,
    setSoundEnabled,
    musicEnabled,
    setMusicEnabled,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};

export { GameContext, GameProvider };
