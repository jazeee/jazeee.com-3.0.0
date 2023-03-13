import constate from 'constate';
import { SetStateAction, useCallback, useState } from 'react';

type TPaletteMode = 'light' | 'dark';
const DEFAULT_PALETTE_MODE = 'dark';
const LOCAL_STORAGE_KEY = 'PaletteModeV1';

function getValidPaletteModeFromLocalStorage(): TPaletteMode {
  const paletteMode = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (paletteMode === 'light' || paletteMode === 'dark') {
    return paletteMode;
  }
  return DEFAULT_PALETTE_MODE;
}

function setPaletteModeLocalStorage(paletteMode: TPaletteMode) {
  localStorage.setItem(LOCAL_STORAGE_KEY, paletteMode);
}

function usePaletteMode() {
  const [paletteMode, setPaletteModeState] = useState<TPaletteMode>(
    getValidPaletteModeFromLocalStorage()
  );

  const setPaletteMode = useCallback(
    (valueOrFunction: SetStateAction<TPaletteMode>) => {
      if (typeof valueOrFunction === 'function') {
        setPaletteModeState((currentMode) => {
          const newMode = valueOrFunction(currentMode);
          setPaletteModeLocalStorage(newMode);
          return newMode;
        });
      } else {
        setPaletteModeLocalStorage(valueOrFunction);
        setPaletteModeState(valueOrFunction);
      }
    },
    [setPaletteModeState]
  );

  function togglePaletteMode() {
    setPaletteMode((mode) => (mode === 'dark' ? 'light' : 'dark'));
  }

  const paletteModeIsLight = paletteMode === 'light';
  return {
    paletteMode,
    setPaletteMode,
    paletteModeIsLight,
    paletteModeIsDark: !paletteModeIsLight,
    togglePaletteMode,
  };
}

export const [PaletteModeContext, usePaletteModeContext] = constate(usePaletteMode);
