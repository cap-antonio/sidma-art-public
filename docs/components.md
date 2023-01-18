# Component organizations

## generic компоненты

Generic components are stored in `src/components/generic`. It is important to
understand that such components can't be subscribed on store. They must be the
clean functions.
Import from ouside of generic folder is prohibited.

## shared компоненты

When you need to create a reusable components with store subscription, that
component should be locate in `src/components/shared`.

## Component

It is usefull for every component to use a bolierplate structure.
If a new component is called `SomeComponent`, then you should create a folder
with the same name `SomeComponent`, which will contain:

- `SomeComponent.tsx` which contain a new component
- `styles.ts` with styles for the particular component
- `types.ts` with types for the particular component
- `hooks.ts` with hooks for the particular component
- `index.ts` for exporting staff you need from this folder

## Component decomposition

If your component is over than 200 lines, it is time to think about
decomposition.

## Imports

All imports must be sorted with next pattern:

1. Installed third-party libraries.
2. Local components, modules, styles.
3. Types.

Every particular type of sorting is divided by empty line. Example:

```ts
import React from 'react'
import { groupBy } from 'ramda'

import { Button } from 'src/generic'
import { lsGet } from 'src/utils/local-storage'

import type { TCompType } from './types'
```
