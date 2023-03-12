import { lazy, LazyExoticComponent } from 'react';

/**
 * Unused function to try out lazy named imports. Consider removing `lazy` here.
 * @param path Path to component (Note - vscode refactoring doesn't help with these)
 * @param namedExport Name of exported component, as in `export const Name`
 * @returns Lazy loaded module
 */
export function lazyNamedImport(
  path: string,
  namedExport: string
): Record<string, LazyExoticComponent<() => JSX.Element>> {
  return {
    [namedExport]: lazy(async () => ({
      default: (await import(path))[namedExport] as () => JSX.Element,
    })),
  };
}
