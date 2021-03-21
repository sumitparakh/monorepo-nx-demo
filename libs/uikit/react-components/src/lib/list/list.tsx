import React from 'react';

import './list.module.scss';

/* eslint-disable-next-line */
export interface ListProps {
  hidden?: boolean;
}

export function List(props: ListProps) {
  return (
    !props.hidden ? (
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    ) : <></>
  );
}

export default List;
