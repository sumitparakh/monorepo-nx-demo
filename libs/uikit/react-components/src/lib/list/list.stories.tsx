import { boolean } from '@storybook/addon-knobs';
import React from 'react';
import { List, ListProps } from './list';

export default {
  component: List,
  title: 'List',
};

export const primary = () => {
  const props: ListProps = {
    hidden: boolean('hidden', false),
  };

  return <List hidden={props.hidden} />;
};
