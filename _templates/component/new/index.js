module.exports = {
  prompt: ({ prompter }) =>
    prompter
      .prompt([
        {
          name: 'component_name',
          message: 'Component name:',
          type: 'input',
        },
        {
          name: 'is_need_to_create_styles',
          message: 'Do you wan`t to create "styles" file?',
          type: 'select',
          choices: ['Yes', 'No'],
        },
        {
          name: 'dir_path',
          message:
            'Component path: (it will be concatenated with "src/shared/")',
          type: 'input',
        },
        {
          name: 'is_need_to_update_index_file',
          message: 'Do you wan`t to update "index" file?',
          type: 'select',
          choices: ['Yes', 'No'],
        },
      ])
      .then(async (answers) => {
        const { component_name } = answers
        const dir_path = answers.dir_path
          ? `src/shared/${answers.dir_path}`
          : `src/shared`
        const component_path = `${dir_path}/${
          component_name.slice(0, 1).toUpperCase() +
          component_name.slice(1, component_name.length)
        }`

        return {
          ...answers,
          dir_path,
          component_path,
        }
      }),
}
