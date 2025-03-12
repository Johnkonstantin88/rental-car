import styled from 'styled-components';
import { Form } from 'formik';
import { MyTextArea, MyTextInput } from './customFormInputs';

export const StyledFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 640px;
  height: 488px;
  gap: 24px;
  border-radius: 10px;
  border: 1px solid var(--grey-light);
  padding: 32px;
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledInput = styled(MyTextInput)`
  position: relative;
  width: 576px;
  height: 48px;
  padding: 12px 20px;
  font-weight: 500;
  font-size: 16px;
  border-color: transparent;
  outline: transparent;
  border-radius: 12px;
  vertical-align: middle;
  color: var(--grey);
  background-color: var(--inputs);
  margin-bottom: 16px;
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-text-fill-color: var(--grey);
    transition: background-color 0s 0s, color 0s 0s;
    transition-delay: calc(infinity * 1s);
  }
`;

export const StyledTextArea = styled(MyTextArea)`
  width: 576px;
  height: 88px;
  border-radius: 12px;
  border-color: transparent;
  outline: transparent;
  padding-top: 12px;
  padding-right: 20px;
  padding-bottom: 56px;
  padding-left: 20px;
  font-weight: 500;
  font-size: 16px;
  vertical-align: middle;
  background-color: var(--inputs);
  color: var(--grey);
  margin-bottom: 24px;
  resize: none;
`;
