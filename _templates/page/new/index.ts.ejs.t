---
to: <%= page_path %>/index.ts
---
export { <%= h.changeCase.pascal(page_name) %>, <%= h.changeCase.pascal(page_name) %> as default } from './<%= h.changeCase.pascal(page_name) %>';

