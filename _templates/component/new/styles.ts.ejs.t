---
to: "<%= is_need_to_create_styles === 'Yes' ? `${component_path}/styles.ts` : null %>"
---
import styled from '@emotion/styled';

export const Styled<%= h.changeCase.pascal(component_name) %> = styled.div`

`;