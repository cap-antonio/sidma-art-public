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
          name: 'is_need_to_create_styles',
          message: 'Do you wan`t to create "styles" file?',
          type: 'select',
          choices: ['Yes', 'No'],
        },
      ])
      .then(async (answers) => {
        const { page_name } = answers
        const dir_path = `src/pages`
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
