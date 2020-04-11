import * as React from 'react';

import { useLaunchProfileQuery } from '../../generated/graphql';
import LaunchProfile, { OwnProps } from './LaunchProfile';

const LaunchProfileContainer = ({ id }: OwnProps) => {
  const { data, error, loading, refetch } = useLaunchProfileQuery({
    variables: { id: String(id) },
  });

  React.useEffect(() => {
    refetch();
  }, [id, refetch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>ERROR</div>;
  }

  if (!data) {
    return <div>Select a flight from the panel</div>;
  }

  return <LaunchProfile data={data} id={id} />;
};

export default LaunchProfileContainer;
