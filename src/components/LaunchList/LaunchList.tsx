import * as React from 'react';

import { LaunchListQuery } from '../../generated/graphql';
import './styles.css';

export type OwnProps = {
  onIdChange: (newId: number) => void;
};

type Props = {
  data: LaunchListQuery;
} & OwnProps;

const className = 'LaunchList';

const LaunchList = ({ data, onIdChange }: Props) => (
  <div className={className}>
    <h3>Launches</h3>
    <ol className={`${className}__list`}>
      {!!data.launches &&
        data.launches.map(
          (launch, index) =>
            !!launch && (
              <li
                key={index}
                className={`${className}__item`}
                onClick={() => onIdChange(launch.flight_number!)}
              >
                {launch.mission_name} ({launch.launch_year})
              </li>
            )
        )}
    </ol>
  </div>
);

export default LaunchList;
