import React from 'react';

import './button.module.scss';

/* eslint-disable-next-line */
export interface ButtonProps {
  text?: string;
  backgroundColor?: string;
}

export function Button(props: ButtonProps = { text: 'Submit' }) {
  return <button style={{background: props.backgroundColor}} className="btn"  type="button">{props.text}</button>;
}

export default Button;
