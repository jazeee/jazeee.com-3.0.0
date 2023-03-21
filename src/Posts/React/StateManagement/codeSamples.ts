/**
 * Source and html code samples.
 * Use https://github.com/jazeee/code-syntax-highlighter/tree/main to generate html.
 */
export const REACT_STATE_CODE_SAMPLES = {
  useMyValue: {
    source: `function useMyValue() {
  const [myValue, setMyValue] = useState<number>(0);
  const nextValue: number = myValue + 1;
  return { myValue, nextValue, setMyValue };
}`,
    html: `<span class="token keyword">function</span> <span class="token function">useMyValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>myValue<span class="token punctuation">,</span> setMyValue<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token generic-function"><span class="token function">useState</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> nextValue<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> myValue <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span> myValue<span class="token punctuation">,</span> nextValue<span class="token punctuation">,</span> setMyValue <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>`,
  },
  useIncrementer: {
    source: `function useIncrementer() {
  const [myValue, setMyValue] = useState<number>(0);
  const incrementValueBy = useCallback((increment: number) => {
    setMyValue((value) => value + increment);
  });
  const decrementValueBy = useCallback((decrement: number) => {
    setMyValue((value) => value - decrement);
  });
  return { myValue, setMyValue, incrementValueBy, decrementValueBy };
}`,
    html: `<span class="token keyword">function</span> <span class="token function">useIncrementer</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>myValue<span class="token punctuation">,</span> setMyValue<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token generic-function"><span class="token function">useState</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> incrementValueBy <span class="token operator">=</span> <span class="token function">useCallback</span><span class="token punctuation">(</span><span class="token punctuation">(</span>increment<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">setMyValue</span><span class="token punctuation">(</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">=></span> value <span class="token operator">+</span> increment<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> decrementValueBy <span class="token operator">=</span> <span class="token function">useCallback</span><span class="token punctuation">(</span><span class="token punctuation">(</span>decrement<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">setMyValue</span><span class="token punctuation">(</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">=></span> value <span class="token operator">-</span> decrement<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span> myValue<span class="token punctuation">,</span> setMyValue<span class="token punctuation">,</span> incrementValueBy<span class="token punctuation">,</span> decrementValueBy <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>`,
  },
  constateExample: {
    souce: `function usePaletteMode() {
  const [paletteMode, setPaletteMode] = useState<TPaletteMode>('dark');

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

export const [PaletteModeContext, usePaletteModeContext] = constate(usePaletteMode);`,
    html: `<span class="token keyword">function</span> <span class="token function">usePaletteMode</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>paletteMode<span class="token punctuation">,</span> setPaletteMode<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token generic-function"><span class="token function">useState</span><span class="token generic class-name"><span class="token operator">&lt;</span>TPaletteMode<span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token string">'dark'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">function</span> <span class="token function">togglePaletteMode</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">setPaletteMode</span><span class="token punctuation">(</span><span class="token punctuation">(</span>mode<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>mode <span class="token operator">===</span> <span class="token string">'dark'</span> <span class="token operator">?</span> <span class="token string">'light'</span> <span class="token operator">:</span> <span class="token string">'dark'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">const</span> paletteModeIsLight <span class="token operator">=</span> paletteMode <span class="token operator">===</span> <span class="token string">'light'</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    paletteMode<span class="token punctuation">,</span>
    setPaletteMode<span class="token punctuation">,</span>
    paletteModeIsLight<span class="token punctuation">,</span>
    paletteModeIsDark<span class="token operator">:</span> <span class="token operator">!</span>paletteModeIsLight<span class="token punctuation">,</span>
    togglePaletteMode<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token punctuation">[</span>PaletteModeContext<span class="token punctuation">,</span> usePaletteModeContext<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">constate</span><span class="token punctuation">(</span>usePaletteMode<span class="token punctuation">)</span><span class="token punctuation">;</span>`,
  },
};
