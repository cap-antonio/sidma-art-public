---
to: <%= component_path %>/index.ts
---
export * from './<%= h.changeCase.pascal(component_name) %>';
export * from './types';
