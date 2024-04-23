import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';

import { ExternalLink } from 'src/components/Links';
import { Li } from 'src/components/Lists/Li';
import { Ol } from 'src/components/Lists/Ol';
import { Spacer } from 'src/components/Spacers/Spacer';
import { Span } from 'src/components/Span';
import { Code } from 'src/Posts/components/Code';
import { PostLayout } from 'src/Posts/components/PostLayout';

import { REACT_STATE_CODE_SAMPLES } from './codeSamples';
import { CodeBlock } from '../../components/CodeBlock';
import { WarningLine } from '../../components/WarningLine';

const POST_TITLE = 'React State Management';

export function ReactStateManagementPost() {
  return (
    <PostLayout
      layoutProps={{
        title: POST_TITLE,
        description: 'An overview of React state management strategies.',
      }}
      breadcrumbName="React State Management"
      headlineProps={{
        title: POST_TITLE,
        date: '2023-03-18',
      }}
    >
      <Typography variant="h2" paragraph>
        Summary
      </Typography>
      <Typography paragraph>
        State management is a core concept for React due to its declarative nature. The online{' '}
        <ExternalLink to="https://react.dev/learn">React training guidelines</ExternalLink> provide
        an excellent set of information regarding core concepts. In this post, I&apos;ll summarize
        state management code patterns, and go over persistence in the UI.
      </Typography>
      <Typography variant="h2" paragraph>
        React Hooks
      </Typography>
      <Typography paragraph>
        React hooks are composable and reusable functions that you can use to abstract React code.
        Hooks can help separate functionality from rendering. You can create your own hook to wrap
        and provide other hooks and functionality.
      </Typography>
      <Typography paragraph>
        React hooks introduce a number of useful coding patterns that solve pain points in a
        declarative manner. Think of hooks as components with no rendering response.
      </Typography>
      <Typography variant="h2" paragraph>
        In-Memory State Management
      </Typography>
      <Typography paragraph>
        React provides a hook, <Code>useState</Code>, to manage reactive in-memory state. You can
        compose more complex functionality around this state management.
      </Typography>
      <Typography variant="h3" paragraph>
        Example
      </Typography>
      <Typography paragraph>
        A simple hook that maintains state, and provides an extra derived value.
      </Typography>
      <CodeBlock codeSample={REACT_STATE_CODE_SAMPLES.useMyValue} />
      <Spacer height={1} />
      <Typography paragraph>
        A hook that demonstrates updating state. It is important to use this form when updating
        state based on current state. Note also, I use <Code>useCallback</Code> to memoize the
        functions. See also,{' '}
        <ExternalLink to="https://react.dev/learn/queueing-a-series-of-state-updates">
          queueing state updates
        </ExternalLink>
        .
      </Typography>
      <CodeBlock codeSample={REACT_STATE_CODE_SAMPLES.useIncrementer} />
      <Spacer height={1} />
      <Typography variant="h3" paragraph>
        Risks of Directly Mutating State
      </Typography>
      <Typography paragraph>
        In the above example, I go over updating state based on prior state. Similarly, you should
        ensure that you don&apos;t directly mutate state, and instead, create a new object or array.
        See{' '}
        <ExternalLink to="https://react.dev/learn/updating-objects-in-state">
          updating objects in state
        </ExternalLink>
        , and{' '}
        <ExternalLink to="https://react.dev/learn/updating-arrays-in-state">
          updating arrays in state
        </ExternalLink>
        .
      </Typography>
      <Typography variant="h2" paragraph>
        Accessing State and Functionality Through the Stack
      </Typography>
      <Typography variant="h3" paragraph>
        React Context
      </Typography>
      <Typography paragraph>
        <ExternalLink to="https://react.dev/learn/passing-data-deeply-with-context">
          React Context
        </ExternalLink>{' '}
        is React&apos;s solution to sharing state within an area of code.
      </Typography>
      <Typography paragraph>
        Many projects are based on React Context, including{' '}
        <ExternalLink to="https://reactrouter.com/en/main">React Router</ExternalLink>,{' '}
        <ExternalLink to="https://formik.org/">Formik</ExternalLink>, and others.
      </Typography>
      <Typography paragraph>
        I have had a lot of success using React Context, and particularly recommend using{' '}
        <ExternalLink to="https://www.npmjs.com/package/constate">React Constate</ExternalLink>
      </Typography>
      <CodeBlock codeSample={REACT_STATE_CODE_SAMPLES.constateExample} />
      <Spacer height={1} />
      <Typography variant="h3" paragraph sx={{ textDecoration: 'lineThrough' }}>
        Redux
      </Typography>
      <Typography>
        <ExternalLink to="https://redux.js.org/">Redux</ExternalLink> is a popular global state
        management system. At one time, it was the defacto-standard, but these days, I don&apos;t
        recommend it.
      </Typography>
      <Ol>
        <Li>It is typically implemented as a global mutable singleton.</Li>
        <Li>
          Globally mutable state means any part of the code can change the state, resulting in
          unpredictable, and hard to debug bugs.
        </Li>
        <Li>
          In any other language, you would not create a global mutable singleton to manage
          application state. This would be like maintaining all state in an object like{' '}
          <Code>window.myApp</Code>.
        </Li>
        <Li>
          Actions are identified by string keys. It is very easy to introduce a bug by using the
          same action name in different places. All action keys must be globally unique. This does
          not scale.
        </Li>
        <Li>
          Redux actions execute every reducer in the codebase. This does not scale, and applications
          can become quite slow due to this churn. This can be particularly painful when using Redux
          to maintain form field state, since each typed character can result in a lot of lag.
        </Li>
      </Ol>
      <Typography variant="h2" paragraph>
        Managing State Outside of RAM
      </Typography>
      <Typography paragraph>
        You can persist state outside of memory. The browser provides a number of alternatives for
        maintaining state. You can also, of course, store data to an API service.
      </Typography>
      <Typography variant="h3" paragraph>
        Cookies
      </Typography>
      <Typography>
        Cookies are a traditional place to persist semi-permanent state, including an authentication
        token. Make sure to follow appropriate security settings and access control.
      </Typography>
      <List>
        <ListItem>
          <WarningLine>
            Be aware that cookies have a browser dependent size limit, and number of cookies. Limit
            cookie usage to 60 per domain and total size to be less than or equal to 4093 bytes. If
            you exceed this size, your user may see unusual, hard to debug errors that can only be
            resolved by the end user clearing their cookies.
          </WarningLine>
        </ListItem>
      </List>
      <Typography variant="h3" paragraph>
        Web Storage API
      </Typography>
      <Typography>
        <ExternalLink to="https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API">
          Web storage API
        </ExternalLink>{' '}
        - <Code>window.localStorage</Code> and <Code>window.sessionStorage</Code> are useful places
        to maintain persistent state.
      </Typography>
      <List>
        <ListItem>
          <WarningLine>
            <Code>window.localStorage</Code> state persists in the browser, even after closing the
            session. Do not store sensitive information in <Code>LocalStorage</Code>.
          </WarningLine>
        </ListItem>
        <ListItem>
          <Span sx={{ textAlign: 'left' }}>
            If you use <Code>window.localStorage</Code>, only use it to persist semi-permanent data
            that does not include personal information.
          </Span>
        </ListItem>
        <ListItem>
          <Span sx={{ textAlign: 'left' }}>
            If you use <Code>window.sessionStorage</Code>, remember that it is cleared when the user
            closes the browser tab.
          </Span>
        </ListItem>
      </List>
      <Typography variant="h3" paragraph>
        URL as State
      </Typography>
      <Typography paragraph>
        The URL is a great place to maintain some state. For example, the URL can contain properties
        (aka slugs): <Code>/path/values/:id</Code> where <Code>:id</Code> is a slug. Similarly, the
        URL can contain query parameters: <Code>/path?queryParam=5</Code>.
      </Typography>
      <Typography paragraph>
        <ExternalLink to="https://reactrouter.com/en/main">React Router</ExternalLink>, provides
        reactive access to route slugs and query parameters via hooks: <Code>useLocation</Code> and{' '}
        <Code>useParams</Code>.
      </Typography>
      <Typography paragraph>
        Slugs and query parameters can, (and should), be used for state management. For example,
        when a user selects a tab in the UI, you can maintain this state as a query parameter. The
        user can refresh the UI to see the same tab.
      </Typography>
      <Typography variant="h3" paragraph>
        Browser Location State
      </Typography>
      <Typography>
        <Code>location.state</Code> can transfer information as part of navigating to a new route.
        Note, however, this can introduce bugs, since the state may not exist, or the user may open
        a URL in a new browser.
      </Typography>
      <List>
        <ListItem>
          <WarningLine>
            Be aware that the browser maintains location.state, as part of browser history, so it is
            &quot;sticky&quot;. For example, clicking the browser back button will restore that
            state, which may be surprising. Note also, refreshing the browser maintains browser
            state.
          </WarningLine>
        </ListItem>
        <ListItem>
          <WarningLine>
            The state is not part of the URL, so if a user copies the URL, they won&apos; see the
            same state.
          </WarningLine>
        </ListItem>
        <ListItem>
          <WarningLine>
            Related, opening a link in a new tab via ctrl-click or context menu also does not carry
            that state forward.
          </WarningLine>
        </ListItem>
        <ListItem>Emailed links do not include this state (obviously).</ListItem>
        <ListItem>Testing is also more complex.</ListItem>
      </List>
      <Typography variant="h2" paragraph>
        Summary
      </Typography>
      <Typography paragraph>
        Generally, React is a state driven system, and we should leverage the appropriate tools for
        the job. There are many choices, each with their benefits and constraints. Choose wisely.
      </Typography>
      <Typography paragraph>
        In my next post, I will cover the dangers of <Code>useEffect</Code>, along with
        recommendations and strategies.
      </Typography>
    </PostLayout>
  );
}
