module.exports = {
  prompt: ({ prompter }) =>
    prompter
      .prompt([
        {
          name: 'page_name',
          message: 'Page name:',
          type: 'input',
        },
        {
          name: 'dir_path',
          message:
            'Page path: (it will be concatenated with "src/components/pages/")',
          type: 'input',
        },
        {
          name: 'is_need_to_create_mock',
          message: 'Do you wan`t to create "mock" file?',
          type: 'select',
          choices: ['Yes', 'No'],
        },
        {
          name: 'is_need_to_update_index_file',
          message: 'Do you wan`t to update "index" file?',
          type: 'select',
          choices: ['Yes', 'No'],
        },
        {
          name: 'is_need_to_create_styles',
          message: 'Do you wan`t to create "styles" file?',
          type: 'select',
          choices: ['Yes', 'No'],
        },
      ])
      .then(async (answers) => {
        const { page_name } = answers
        const dir_path = answers.dir_path
          ? `src/components/pages/${answers.dir_path}`
          : `src/components/pages`
        const page_path = `${dir_path}/${
          page_name.slice(0, 1).toUpperCase() +
          page_name.slice(1, page_name.length)
        }`

        return {
          ...answers,
          dir_path,
          page_path,
        }
      }),
}
