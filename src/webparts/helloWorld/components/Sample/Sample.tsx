import * as React from 'react';

import { Environment, EnvironmentType } from '@microsoft/sp-core-library';

export interface ISampleProps { }

export class Sample extends React.Component<ISampleProps, {}> {
  public render(): React.ReactElement<ISampleProps> {

    const x: EnvironmentType = Environment.type;

    return (
      <div>
        <span>Hello world:</span>
        <ul>
          <li>one</li>
          <li>two</li>
          <li>three</li>
        </ul>
      </div>
    );
  }
}
