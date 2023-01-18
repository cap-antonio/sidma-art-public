module.exports = {
  // TS files check
  '**/*.(ts|tsx)': () => 'tsc --pretty --noEmit --incremental false',

  // format with eslint and prettier
  '**/*.(ts|tsx|js)': (filenames) => [
    `yarn eslint --fix ${filenames.join(' ')}`,
    `yarn prettier --write ${filenames.join(' ')}`,
  ],

  // format MarkDown и JSON files
  '**/*.(md|json)': (filenames) =>
    `yarn prettier --write ${filenames.join(' ')}`,
}
