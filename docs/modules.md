# Modules, folders, and naming

## Files' and folders' title

1. By default, if file or folder name is connected with the component name, or class, or fucntion inside, use PascalCase for the components and modules, and camelCase for the hooks and functions:

   - `SomeComponent/SomeComponent.ts`
   - `getCookie.ts`
   - `useHook.ts`

Follow a file structure described in [here](docs/components.md)

2. For style class names (if applicable) use kebab-case. For the main component wrapper use combination by this pattern 'component-name':

   - `blog-page`
   - `modal`

## Modules organizations

It is usefull to have a common structure (for example `src/shared/hooks` or `src/shared/helpers`). As with the component structure please consider using the same way of organization :

- `getSomeData.tsx` which will contain the module
- `types.ts` with types for the particular module
- `index.ts` for imports all what we need

Then all modules are imported from the index file of the paretn folder, for example `src/shared/helpers/index.ts`.
