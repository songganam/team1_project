import styled from "@emotion/styled";

export const TSRadioLableStyle = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  input {
    display: none;
  }
  .radio-custom {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: var(--gray-200, #e5e7eb); /* 기본 배경색 */
  }
`;
