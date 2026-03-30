export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        // version bump types
        'feat',
        'fix',
        'perf',
        'revert',

        // standard non-breaking types
        'docs',
        'style',
        'refactor',
        'test',
        'build',
        'ci',
        'chore',

        // custom project-specific types
        'enhance',
        'seo',
        'hotfix',
        'db',
        'init',
        'remove',
        'move',
        'deps',
        'lint',
        'experiment',
        'wip',
      ],
    ],
  },
};