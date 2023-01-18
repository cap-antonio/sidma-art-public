---
to: <%= hook_path %>/<%= hook_name %>.ts
---
import type { T<%= hook_name %>Output } from './types';

export const <%= hook_name %> = (): T<%= h.changeCase.pascal(hook_name) %>Output => {
  //
}
