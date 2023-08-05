---
inject: true
to: "<%= is_need_to_update_index_file === 'Yes' ? `${dir_path}/index.ts` : null %>"
append: true
skip_if: <%= h.changeCase.pascal(component_name) %>
---
export * from './<%= h.changeCase.pascal(component_name) %>'
