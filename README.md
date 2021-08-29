# storybook-addon-jsx disable bug

Steps to replicate:

1. `yarn storybook`
2. Go to http://localhost:6006/?path=/story/example-button--primary
3. Press "D" to reveal the addons

Notice that the JSX addon tab is visible, but its contents are empty.
