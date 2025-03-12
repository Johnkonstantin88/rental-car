import styled from 'styled-components';

export const DetailsContentWrapper = styled.div`
  display: flex;
  gap: 72px;
`;

export const DetailsImage = styled.img`
  width: 640px;
  height: 512px;
  margin-top: 84px;
  margin-bottom: 40px;
  object-fit: cover;
  border-radius: 19px;
`;

export const FormTitle = styled.h3`
  font-weight: 600;
  font-size: 20px;
  line-height: 1.2;
  margin-bottom: 8px;
`;

export const SupportingText = styled.p`
  font-weight: 500;
  font-size: 16px;
  color: var(--grey);
`;
