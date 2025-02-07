/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
  stories: ['../src/stories/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  core: {
    builder: '@storybook/builder-webpack5',
  },
  features: {
    storyStoreV7: false
  },
  managerHead: (head) => `
    ${head}
    <base href="/storybook/">
  `,
  docs: {
    autodocs: 'tag',
  },
};

export default config; 