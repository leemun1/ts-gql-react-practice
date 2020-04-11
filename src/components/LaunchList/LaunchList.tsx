import * as React from 'react';

import { LaunchListQuery } from '../../generated/graphql';
import './styles.css';

type Props = {
  data: LaunchListQuery;
};

const className = 'LaunchList';

const LaunchList = ({ data }: Props) => (
  <div className={className}>
    <h3>Launches</h3>
    <ol className={`${className}__list`}>
      {!!data.launches &&
        data.launches.map(
          (launch, index) =>
            !!launch && (
              <li key={index} className={`${className}__item`}>
                {launch.mission_name} ({launch.launch_year})
              </li>
            )
        )}
    </ol>
  </div>
);

export default LaunchList;
