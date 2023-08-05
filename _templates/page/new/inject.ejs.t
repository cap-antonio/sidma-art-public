---
inject: true
to: "<%= is_need_to_update_index_file === 'Yes' ? `${dir_path}/index.ts` : null %>"
append: true
skip_if: <%= h.changeCase.pascal(page_name) %>
---
export { <%= h.changeCase.pascal(page_name) %> as default } from './<%= h.changeCase.pascal(page_name) %>'
