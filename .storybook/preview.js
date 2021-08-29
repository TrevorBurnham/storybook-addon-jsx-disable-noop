const { addDecorator } = require('@storybook/react');
const { jsxDecorator } = require('storybook-addon-jsx');

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

addDecorator(jsxDecorator);
