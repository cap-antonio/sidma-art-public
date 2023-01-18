---
inject: true
to: <%= dir_path %>/index.ts
append: true
skip_if: <%= hook_name %>
---
export * from './<%= hook_name %>';
