import Typography from '@mui/material/Typography';

import { PostDefinitionBlock } from './Definition';

export function FlakyTestDefinitions() {
  return (
    <>
      <Typography variant="h3" paragraph color="secondary">
        Definitions
      </Typography>
      <PostDefinitionBlock
        name="Pull Requests (PRs)/Change Requests/Diffs"
        description="The software engineering process to indicate that code changes are ready to be incorporated (merged) into the main software repository."
      />
      <PostDefinitionBlock
        name="Continuous Integration (CI)"
        description="The process of running automated tests and builds as part of software engineering. CI processes are often done as part of a PR/change request, and also as part of build/deployment processes."
      />
      <PostDefinitionBlock
        name="Merge Queue"
        description="A system that batches software changes (PRs), runs CI, and incorporates (merges) those changes into the main software repository."
      />
      <PostDefinitionBlock name="Flaky Test" description="A test that intermittently fails." />
    </>
  );
}
