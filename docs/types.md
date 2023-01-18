# Types

## General

Types should be name with T prefix and with the component or function name.
Example: `TLoginPage`
Do not use interfaces!

Types should be imported this way:

```ts
import { someModule } from './SomeModule'

import type { SomeModuleType } from './SomeModule'
import { SomeEnum } from './SomeModule'
```

## Common types

Common types are stored in `src/types`.
