---
to: "<%= is_need_to_create_styles === 'No' ? `${component_path}/${h.changeCase.pascal(component_name)}.tsx` : null %>"
---

import { FC } from 'react'

import type { T<%= h.changeCase.pascal(component_name) %> } from './types'

export const <%= h.changeCase.pascal(component_name) %>: FC<T<%= h.changeCase.pascal(component_name) %>> = (props) => {
  return <></>;
}
