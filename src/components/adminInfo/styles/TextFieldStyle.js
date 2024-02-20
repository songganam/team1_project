import styled from "@emotion/styled";

export const TextFieldStyle = styled.div`
  display: flex;
  width: 500px;
  height: 46px;
  padding: 12px 16px;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border: 1px solid
    ${({ state }) =>
      state === "error"
        ? "var(--red-500, #EF4444)"
        : state === "focus"
        ? "var(--blue-500, #3B82F6)"
        : "var(--gray-200, #E5E7EB)"};
  background: var(--gray-50, #f9fafb);
`;
export const TextFieldAdressStyle = styled(TextFieldStyle)`
  width: 380px;
`;
export const InputStyle = styled.input`
  flex-grow: 1;
  border: none;
  background-color: transparent;
  flex: 1 0 0;
  align-self: stretch;
  color: var(--gray-900, #111827);
  /* 14/regular */
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 21px */
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: var(--gray-400, #9ca3af);
    font-family: "Pretendard", sans-serif; // 폰트 패밀리를 지정하세요.
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 21px */
  }
`;
