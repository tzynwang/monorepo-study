import React, { memo } from 'react';
import cn from 'classnames';
import { Hello } from '@plain-react-webpack/components';
import scopedStyle from './App.module.css';
import './App.css';

function App(): React.ReactElement {
  /* Main */
  return (
    <React.Fragment>
      <div className={cn('AppStyle', scopedStyle.scopedAppStyle)}>
        An App Component.
      </div>
      <Hello />
      <div>process.env.API: {process.env.API}</div>
    </React.Fragment>
  );
}

export default memo(App);
