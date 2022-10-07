import React, { memo } from 'react';
import cn from 'classnames';
import scopedStyle from './index.module.css';

function Hello(): React.ReactElement {
  /* Main */
  return <div className={cn(scopedStyle.scopedHelloStyle)}>hello world 😂</div>;
}

export default memo(Hello);
