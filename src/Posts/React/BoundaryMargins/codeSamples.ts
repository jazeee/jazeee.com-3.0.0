import { SimpleCard } from './ExampleComponents/NoMargin/SimpleCard';
import { StackOfResponsiveCards } from './ExampleComponents/NoMargin/StackOfResponsiveCards';
import { StackOfSimpleCards } from './ExampleComponents/NoMargin/StackOfSimpleCards';
import { CardWithMargins } from './ExampleComponents/WithMargins/CardWithMargins';
import { StackOfColumnFixedMarginedCards } from './ExampleComponents/WithMargins/StackOfColumnFixedMarginedCards';
import { StackOfMarginedCards } from './ExampleComponents/WithMargins/StackOfMarginedCards';
import { StackOfResponsiveMarginedCards } from './ExampleComponents/WithMargins/StackOfResponsiveCards';
import { UnfixableResponsiveRowCards } from './ExampleComponents/WithMargins/UnfixableResponsiveRowCards';

/**
 * Source and html code samples.
 * Use https://github.com/jazeee/code-syntax-highlighter/tree/main to generate html.
 */
export const BOUNDARY_MARGINS_CODE_SAMPLES = {
  SimpleCard: {
    Component: SimpleCard,
    html: `<span class="token operator">&lt;</span>Box sx<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> border<span class="token operator">:</span> <span class="token string">'1px solid red'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">></span><span class="token punctuation">{</span>children<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>Box<span class="token operator">></span>`,
  },
  SpacingExample: {
    Component: StackOfSimpleCards,
    html: `<span class="token operator">&lt;</span>Stack spacing<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span><span class="token operator">></span>
  <span class="token operator">&lt;</span>SimpleCard<span class="token operator">></span>Hello<span class="token operator">&lt;</span><span class="token operator">/</span>SimpleCard<span class="token operator">></span>
  <span class="token operator">&lt;</span>SimpleCard<span class="token operator">></span>World<span class="token operator">&lt;</span><span class="token operator">/</span>SimpleCard<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>Stack<span class="token operator">></span>`,
  },
  ResponsiveSpacingExample: {
    Component: StackOfResponsiveCards,
    html: `<span class="token operator">&lt;</span>Stack spacing<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span> direction<span class="token operator">=</span><span class="token punctuation">{</span>direction<span class="token punctuation">}</span><span class="token operator">></span>
  <span class="token operator">&lt;</span>SimpleCard<span class="token operator">></span>Hello<span class="token operator">&lt;</span><span class="token operator">/</span>SimpleCard<span class="token operator">></span>
  <span class="token operator">&lt;</span>SimpleCard<span class="token operator">></span>World<span class="token operator">&lt;</span><span class="token operator">/</span>SimpleCard<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>Stack<span class="token operator">></span>
`,
  },
  CardWithMargins: {
    Component: CardWithMargins,
    html: `<span class="token operator">&lt;</span>Box sx<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginBottom<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> border<span class="token operator">:</span> <span class="token string">'1px solid red'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">></span><span class="token punctuation">{</span>children<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>Box<span class="token operator">></span>`,
  },
  StackOfMarginedCards: {
    Component: StackOfMarginedCards,
    html: `<span class="token operator">&lt;</span>Stack spacing<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">}</span><span class="token operator">></span>
  <span class="token operator">&lt;</span>CardWithMargins<span class="token operator">></span>Hello<span class="token operator">&lt;</span><span class="token operator">/</span>CardWithMargins<span class="token operator">></span>
  <span class="token operator">&lt;</span>CardWithMargins<span class="token operator">></span>World<span class="token operator">&lt;</span><span class="token operator">/</span>CardWithMargins<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>Stack<span class="token operator">></span>
`,
  },
  StackOfColumnFixedMarginedCards: {
    Component: StackOfColumnFixedMarginedCards,
    html: `<span class="token operator">&lt;</span>Stack spacing<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">}</span><span class="token operator">></span>
  <span class="token operator">&lt;</span>CardWithMargins<span class="token operator">></span>Hello<span class="token operator">&lt;</span><span class="token operator">/</span>CardWithMargins<span class="token operator">></span>
  <span class="token operator">&lt;</span>Box marginBottom<span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">}</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>CardWithMargins<span class="token operator">></span>World<span class="token operator">&lt;</span><span class="token operator">/</span>CardWithMargins<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>Box<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>Stack<span class="token operator">></span>`,
  },
  StackOfResponsiveMarginedCards: {
    Component: StackOfResponsiveMarginedCards,
    html: `<span class="token operator">&lt;</span>Stack spacing<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span> direction<span class="token operator">=</span><span class="token punctuation">{</span>direction<span class="token punctuation">}</span><span class="token operator">></span>
  <span class="token operator">&lt;</span>CardWithMargins<span class="token operator">></span>Hello<span class="token operator">&lt;</span><span class="token operator">/</span>CardWithMargins<span class="token operator">></span>
  <span class="token operator">&lt;</span>CardWithMargins<span class="token operator">></span>World<span class="token operator">&lt;</span><span class="token operator">/</span>CardWithMargins<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>Stack<span class="token operator">></span>`,
  },
  UnfixableResponsiveRowCards: {
    Component: UnfixableResponsiveRowCards,
    html: `<span class="token operator">&lt;</span>Stack spacing<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span> direction<span class="token operator">=</span><span class="token string">"row"</span><span class="token operator">></span>
  <span class="token operator">&lt;</span>Box marginBottom<span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">}</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>CardWithMargins<span class="token operator">></span>Hello<span class="token operator">&lt;</span><span class="token operator">/</span>CardWithMargins<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>Box<span class="token operator">></span>
  <span class="token operator">&lt;</span>Box marginBottom<span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">}</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>CardWithMargins<span class="token operator">></span>World<span class="token operator">&lt;</span><span class="token operator">/</span>CardWithMargins<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>Box<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>Stack<span class="token operator">></span>`,
  },
};
