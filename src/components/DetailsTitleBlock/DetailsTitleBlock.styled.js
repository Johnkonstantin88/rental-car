import styled from 'styled-components';

export const DetailsTitleWrapper = styled.div`
  width: 488px;
  height: 180px;
  margin-bottom: 68px;
`;

export const StyledDetailsTitle = styled.h2`
  display: flex;
  gap: 16px;
  align-items: baseline;
  height: 32px;
  font-weight: 600;
  font-size: 24px;
  line-height: 1.3;
  margin-top: 104px;
  margin-bottom: 8px;
`;

export const StyledCarId = styled.span`
  font-weight: 500;
  font-size: 16px;
  color: var(--grey);
`;

export const LocationMileageWrapper = styled.div`
  display: flex;
  gap: 16px;
  font-weight: 500;
  font-size: 16px;
  margin-bottom: 16px;
`;

export const StyledLocation = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
`;

export const StyledTitlePrice = styled.h2`
  font-weight: 600;
  font-size: 24px;
  line-height: 1.3;
  color: var(--blue);
  margin-bottom: 32px;
`;

export const StyledTitleDescription = styled.p`
  font-weight: 500;
  font-size: 16px;
`;
