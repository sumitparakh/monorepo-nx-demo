import React from 'react';
import {
  UikitReactComponents,
  UikitReactComponentsProps,
} from './uikit-react-components';

export default {
  component: UikitReactComponents,
  title: 'UikitReactComponents',
};

export const primary = () => {
  /* eslint-disable-next-line */
  const props: UikitReactComponentsProps = {};

  return <UikitReactComponents />;
};
