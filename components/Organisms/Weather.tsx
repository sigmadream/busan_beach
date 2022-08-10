import React from 'react';
import styled from 'styled-components';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import theme from '../../styles/theme';
import { useState } from 'react';

const WrapComp = styled.div`
  width: 13.5em;
  padding: 1em;
  margin-bottom: 1em;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.15);
  border-radius: 1rem;
`;

const TitleRight = styled.div`
  font-size: 0.875rem;
  text-align: right;
`;

const TitleCenter = styled.div`
  font-size: 0.875rem;
  text-align: center;
`;

const FcstTemp = styled.div`
  font-size: 2.25rem;
  text-align: right;
  font-weight: 500;
`;

const FcstIcon = styled.div`
  width: 2.75em;
  height: 2.75em;
  background-color: transparent;
  border-radius: 50%;
  text-align: center;
  line-height: 2.75em;
`;

export interface nowInfo {
  icon: 'icon';
  state: string;
  temp: string | undefined;
}

const Weather = ({ info }: { info: nowInfo }) => {
  return (
    <WrapComp>
      <div>
        <FcstIcon>
          <WbSunnyIcon fontSize="large" />
        </FcstIcon>
        <TitleCenter>{info.state}</TitleCenter>
      </div>
      <div>
        <TitleRight>기온</TitleRight>
        <FcstTemp>{`${info.temp}℃`}</FcstTemp>
      </div>
    </WrapComp>
  );
};

export default Weather;