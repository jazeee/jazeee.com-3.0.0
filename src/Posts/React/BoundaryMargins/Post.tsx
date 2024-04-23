import { Stack } from '@mui/material';
import Typography from '@mui/material/Typography';

import { Code } from 'src/Posts/components/Code';
import { PostLayout } from 'src/Posts/components/PostLayout';

import { BOUNDARY_MARGINS_CODE_SAMPLES } from './codeSamples';
import { StackOfResponsiveCards } from './ExampleComponents/NoMargin/StackOfResponsiveCards';
import { StackOfSimpleCards } from './ExampleComponents/NoMargin/StackOfSimpleCards';
import { StackOfColumnFixedMarginedCards } from './ExampleComponents/WithMargins/StackOfColumnFixedMarginedCards';
import { StackOfMarginedCards } from './ExampleComponents/WithMargins/StackOfMarginedCards';
import { StackOfResponsiveMarginedCards } from './ExampleComponents/WithMargins/StackOfResponsiveCards';
import { UnfixableResponsiveRowCards } from './ExampleComponents/WithMargins/UnfixableResponsiveRowCards';
import { ExampleComponentWrapper } from './ExampleComponentWrapper';
import { CodeBlock } from '../../components/CodeBlock';
import { WarningLine } from '../../components/WarningLine';

export const BOUNDARY_SPACING_POST_TITLE = 'Boundary Spacing and Composable Components';

export function BoundarySpacingAndComposableComponents() {
  return (
    <PostLayout
      layoutProps={{
        title: BOUNDARY_SPACING_POST_TITLE,
        description: 'Boundary Spacing and Composable Component Guidelines.',
      }}
      breadcrumbName={BOUNDARY_SPACING_POST_TITLE}
      headlineProps={{
        title: BOUNDARY_SPACING_POST_TITLE,
        date: '2023-08-11',
      }}
    >
      <Stack spacing={2}>
        <Typography variant="h2">Summary</Typography>
        <Typography>
          Boundary margins around components make components less composable. Other than page layout
          components, do not add boundary margins around components.
        </Typography>
        <Typography variant="h2">Considerations</Typography>
        <Typography>
          Some consumers may want 0 margin, others want larger margins. By adding margins around
          components, you force the consumer to have a negative margin, or to add math to account
          for this margin.
        </Typography>
        <Typography>
          You are also creating a fragile dependence across components - one that is hard to unwind.
          This does not scale.
        </Typography>
        <Typography variant="h2">Card With Margin Examples</Typography>
        <Typography>
          To demonstrate how a component with boundary margins affect composability, consider these
          code samples.
        </Typography>
        <Typography variant="h3">Card With Bottom Margin</Typography>
        <CodeBlock codeSample={BOUNDARY_MARGINS_CODE_SAMPLES.CardWithMargins} />
        <Typography variant="h3">Stack of Margined Cards</Typography>
        <Typography>Note that there is extra space after the two cards.</Typography>
        <CodeBlock codeSample={BOUNDARY_MARGINS_CODE_SAMPLES.StackOfMarginedCards} />
        <ExampleComponentWrapper>
          <StackOfMarginedCards />
        </ExampleComponentWrapper>
        <Typography variant="h3">Stack of Margined Cards With A Hack</Typography>
        <Typography>
          We could hack the margin in the caller, with a fragile coupling the two components. Note
          the extra <Code>Box marginBottom</Code> with <Code>-2</Code> to compensate for{' '}
          <Code>CardWithMargins</Code>.
        </Typography>
        <CodeBlock codeSample={BOUNDARY_MARGINS_CODE_SAMPLES.StackOfColumnFixedMarginedCards} />
        <ExampleComponentWrapper>
          <StackOfColumnFixedMarginedCards />
        </ExampleComponentWrapper>
        <WarningLine>
          This is a hack, and doesn&apos;t work when using a <Code>row</Code> layout.
        </WarningLine>
        <CodeBlock codeSample={BOUNDARY_MARGINS_CODE_SAMPLES.UnfixableResponsiveRowCards} />
        <ExampleComponentWrapper>
          <UnfixableResponsiveRowCards />
        </ExampleComponentWrapper>
        <Typography variant="h3">Example of Problems with Responsive Margined Cards</Typography>
        <Typography>Four layout variants with problematic spacing.</Typography>
        <CodeBlock codeSample={BOUNDARY_MARGINS_CODE_SAMPLES.StackOfResponsiveMarginedCards} />
        <WarningLine>
          <Code>direction=&quot;column&quot;</Code> has extra spacing
        </WarningLine>
        <ExampleComponentWrapper>
          <StackOfResponsiveMarginedCards direction="column" />
        </ExampleComponentWrapper>
        <WarningLine>
          <Code>direction=&quot;column-reverse&quot;</Code> has extra spacing in a different place.
        </WarningLine>
        <ExampleComponentWrapper>
          <StackOfResponsiveMarginedCards direction="column-reverse" />
        </ExampleComponentWrapper>
        <WarningLine>
          <Code>direction=&quot;row&quot;</Code> and <Code>direction=&quot;row-reverse&quot;</Code>{' '}
          has uneven layout
        </WarningLine>
        <ExampleComponentWrapper>
          <StackOfResponsiveMarginedCards direction="row" />
        </ExampleComponentWrapper>
        <ExampleComponentWrapper>
          <StackOfResponsiveMarginedCards direction="row-reverse" />
        </ExampleComponentWrapper>

        <Typography variant="h2">Solution - Move Spacing to the Layout</Typography>
        <Typography>
          The solution to these problems is to remove boundary spacing from composable components.
          Move spacing to the layout.
        </Typography>
        <Typography variant="h3">A simple card</Typography>
        <Typography>Note - this component has no added margin.</Typography>
        <CodeBlock codeSample={BOUNDARY_MARGINS_CODE_SAMPLES.SimpleCard} />
        <Typography variant="h3">A stack of spaced cards.</Typography>
        <CodeBlock codeSample={BOUNDARY_MARGINS_CODE_SAMPLES.SpacingExample} />
        <ExampleComponentWrapper>
          <StackOfSimpleCards />
        </ExampleComponentWrapper>
        <Typography variant="h3">A stack of responsive spaced cards.</Typography>
        <Typography>
          This example shows why spacing belongs to the caller. The <Code>SimpleCard</Code>{' '}
          component is easy to compose in any layout even if the caller decides to lay things out in
          rows.
        </Typography>
        <CodeBlock codeSample={BOUNDARY_MARGINS_CODE_SAMPLES.ResponsiveSpacingExample} />
        <Typography>Four layout variants.</Typography>
        <Typography>
          <Code>direction=&quot;column&quot;</Code>
        </Typography>
        <ExampleComponentWrapper>
          <StackOfResponsiveCards direction="column" />
        </ExampleComponentWrapper>
        <Typography>
          <Code>direction=&quot;row&quot;</Code>
        </Typography>
        <ExampleComponentWrapper>
          <StackOfResponsiveCards direction="row" />
        </ExampleComponentWrapper>
        <Typography>
          <Code>direction=&quot;row-reverse&quot;</Code>
        </Typography>
        <ExampleComponentWrapper>
          <StackOfResponsiveCards direction="row-reverse" />
        </ExampleComponentWrapper>
        <Typography>
          <Code>direction=&quot;column-reverse&quot;</Code>
        </Typography>
        <ExampleComponentWrapper>
          <StackOfResponsiveCards direction="column-reverse" />
        </ExampleComponentWrapper>
        <Typography variant="h2">Conclusion</Typography>
        <Typography>
          I highly recommend creating composable components by eliminating boundary margins and
          spacing.
        </Typography>
      </Stack>
    </PostLayout>
  );
}
