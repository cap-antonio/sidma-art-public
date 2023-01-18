---
to: "<%= is_need_to_create_styles === 'Yes' ? `${page_path}/styles.ts` : null %>"
---
import styled from '@emotion/styled';

export const Styled<%= h.changeCase.pascal(page_name) %> = styled.div`

`;