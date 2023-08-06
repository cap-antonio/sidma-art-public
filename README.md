# Sidma Art Store

Private placemarket of arts designed with Feature-sliced Design architecture

- description and examples: https://feature-sliced.design/

## Status

_In process…_

## Development

Source and target branch is dev.

For every task must be created a new branch from the source branch.

Checkout the dev branch first: `git checkout dev`.
Proceed with the Installation step then.

## Installation

Run the command `yarn` for dependencies installation.

For managing content is being used Headless CMS Directus, that is temporary
available locally only.
Clone the [repo](https://github.com/cap-antonio/sidma-art-directus) and apply
steps from README.

## Code-style guide

- [Types](docs/types.md)
- [Component organizations](docs/components.md)
- [Modules organizations](docs/modules.md)

## Branch name style

Please use this branch name pattern branch_type/DEV-number-of-the-task-brief-description.

- Example for feature: `feature/DEV-01-add-readme`
- Example for bug: `bugfix/DEV-02-fix-readme`

## Build (not needed for development)

Run the command `yarn build` for build.

Run the command `yarn global add hygen` to be able to use a file generator.
