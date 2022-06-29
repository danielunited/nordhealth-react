import React from 'react';

import { Button } from './Button';

export default {
  title: 'Example/Button',
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const defaultButton = Template.bind({});
defaultButton.args = {
  label: 'Button',
};
