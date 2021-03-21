import { addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
export const parameters = {
  layout: 'centered',
};
addDecorator(withKnobs);
