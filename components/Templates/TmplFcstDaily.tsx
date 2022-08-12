import React from 'react';
import styled from '@emotion/styled';
import OFcstDaily from '$components/Organisms/OFcstDaily';
import AsyncBoundaryWithQuery from '$components/Boundary/AsyncBoundaryWithQuery';
import SkeletonDaily from '$components/Molecules/SkeletonDaily';

const TemplateLeft = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`;

const TmplFcstDaily = () => {
  return (
    <TemplateLeft>
      <AsyncBoundaryWithQuery pendingFallback={<SkeletonDaily />}>
        <OFcstDaily />
      </AsyncBoundaryWithQuery>
    </TemplateLeft>
  );
};

export default TmplFcstDaily;
