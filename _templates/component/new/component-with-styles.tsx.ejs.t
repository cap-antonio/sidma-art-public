---
to: "<%= is_need_to_create_styles === 'Yes' ? `${component_path}/${h.changeCase.pascal(component_name)}.tsx` : null %>"
---
import { FC } from 'react';

import { Styled<%= h.changeCase.pascal(component_name) %> } from './styles'

import type { T<%= h.changeCase.pascal(component_name) %> } from './types'

export const <%= h.changeCase.pascal(component_name) %>: FC<T<%= h.changeCase.pascal(component_name) %>> = (props) => {
  return (
    <Styled<%= h.changeCase.pascal(component_name) %>>
      //
    </Styled<%= h.changeCase.pascal(component_name) %>>
  )
};
