import React from 'react';
import AtomDate from '../Atoms/AtomDate';
import AtomPlace from '../Atoms/AtomPlace';
import Weather from '../Molecules/Weather';
import { convertCurrentDay, getCurrentDate, getCurrentMonth } from '$utils/date';
import AsyncBoundaryWithQuery from '$components/Boundary/AsyncBoundaryWithQuery';
import SkeletonWeather from '$components/Molecules/SkeletonWeather';

const OFcstNow = ({ nx, ny }: { nx: number; ny: number }) => {
  const [month, date, day] = [getCurrentMonth(), getCurrentDate(), convertCurrentDay()];
  return (
    <>
      <AtomDate today={`${month}월 ${date}일 ${day}요일`} />
      <AtomPlace place="해운대" />
      <AsyncBoundaryWithQuery pendingFallback={<SkeletonWeather />}>
        <Weather nx={nx} ny={ny} />
      </AsyncBoundaryWithQuery>
    </>
  );
};

export default OFcstNow;
