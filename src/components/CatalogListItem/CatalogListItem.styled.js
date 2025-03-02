import styled from 'styled-components';

export const StyledItemWrapper = styled.div`
  position: relative;
  display: flex;
  height: 100%;
  flex-direction: column;
  width: 276px;
`;

export const StyledImageWrapper = styled.div`
  position: relative;
  margin-bottom: 16px;
  width: 276px;
  height: 268px;
`;

export const StyledImage = styled.img`
  width: 276px;
  height: 268px;
  object-fit: cover;
  border-radius: 14px;
`;

export const StyledIconWrapper = styled.div`
  position: absolute;
  display: flex;
  top: 16px;
  right: 16px;
`;

export const StyledSubTitleWrapper = styled.div`
  align-items: center;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const StyledSubTitle = styled.h3`
  width: 100%;
  height: 20px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 16px;
  font-weight: 500;
`;

export const StyledPrice = styled.p`
  font-size: 16px;
  font-weight: 500;
  margin-right: 12px;
`;

export const StyledDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 32px;
`;

export const StyledDescription = styled.ul`
  color: var(--grey);
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  font-weight: 400;
  line-height: 1.3;
  row-gap: 6px;
  width: fit-content;

  & > li:not(:last-child) {
    border-right: 1px solid var(--grey-light);
    margin-right: 6px;
    padding-right: 6px;
  }

  & li {
    color: var(--grey);
  }
`;
