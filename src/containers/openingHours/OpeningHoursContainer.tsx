import React from 'react';
import useFetchRequest from '../../hooks/api/useFetchRequest';
import * as endpoints from '../../Api/endpoints';

const OpeningHoursContainer: React.FunctionComponent = () => {
  const data = useFetchRequest(endpoints.openingHours);
  if (!data) {
    return null;
  }
  return (
    <>
      <div>
        <p>Data from data endpoint</p>
        <p>{data}</p>
      </div>
    </>
  );
};

export default OpeningHoursContainer;
