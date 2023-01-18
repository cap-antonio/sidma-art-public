module.exports = {
  prompt: ({ prompter }) =>
    prompter
      .prompt([
        {
          name: 'hook_name',
          message: 'Hook name:',
          type: 'input',
        },
      ])
      .then(async (answers) => {
        const { hook_name } = answers
        const dir_path = 'src/hooks'
        const hook_path = `${dir_path}/${hook_name}`

        return {
          ...answers,
          dir_path,
          hook_path,
        }
      }),
}
