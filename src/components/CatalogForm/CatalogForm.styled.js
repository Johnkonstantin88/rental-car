import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  align-items: end;
  gap: 16px;
  width: 924px;
  height: 68px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 84px;
  margin-bottom: 56px;
`;

export const StyledLeftInput = styled.input`
  width: 160px;
  height: 44px;
  padding-left: 66px;
  font-weight: 500;
  font-size: 16px;
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;
  border-right-width: 1px;
  background-color: var(--inputs);
  border: transparent;
  border-right: 1px solid #dadde1;
  outline: transparent;
`;

export const StyledRightInput = styled.input`
  width: 160px;
  height: 44px;
  padding-left: 46px;
  font-weight: 500;
  font-size: 16px;
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
  background-color: var(--inputs);
  border: transparent;
  outline: transparent;
`;

export const StyledFieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: relative;
  height: 68px;
`;

export const StyledInputLabel = styled.label`
  height: 16px;
  line-height: 1.3;
  color: var(--grey);
`;

export const StyledLeftInputSpan = styled.span`
  position: absolute;
  width: 38px;
  height: 20px;
  top: 12px;
  left: 24px;
  font-weight: 500;
  font-size: 16px;
`;

export const StyledRightInputSpan = styled.span`
  position: absolute;
  width: 38px;
  height: 20px;
  top: 12px;
  left: 184px;
  font-weight: 500;
  font-size: 16px;
`;
