import React from 'react';
import styled from 'styled-components';
import AtomDayWeek from '../Atoms/AtomDayWeek';
import CloudIcon from '@mui/icons-material/Cloud';

const WrapFcstTimely = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 0.25em;
  line-height: 2;
  margin-bottom: 0.24em;
  margin-right: 1em;
  &:last-child {
    margin-right: 0;
  }
`;

const TemptCurrent = styled.div`
  font-size: 0.875rem;
  text-align: center;
`;

const TimeCurrent = styled.div`
  font-size: 0.875rem;
  text-align: center;
`;

const FcstIcon = styled.div`
  width: 2em;
  height: 2em;
  background-color: transparent;
  border-radius: 50%;
  text-align: center;
`;

export interface timelyInfo {
  tempTimely: number;
  rainRate: number;
  time: number;
}

const FcstTimely = ({ info }: { info: timelyInfo }) => {
  return (
    <WrapFcstTimely>
      <TemptCurrent>
        <AtomDayWeek title={`${info.tempTimely}℃`} />
      </TemptCurrent>
      <FcstIcon>
        <CloudIcon />
      </FcstIcon>
      <TimeCurrent>
        <AtomDayWeek title={`${info.rainRate}%`} />
      </TimeCurrent>
      <TimeCurrent>
        <AtomDayWeek title={`${info.time}시`} />
      </TimeCurrent>
    </WrapFcstTimely>
  );
};

export default FcstTimely;