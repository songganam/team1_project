import styled from "@emotion/styled";

export const TextareaFieldStyle = styled.textarea`
  width: 500px;
  height: 120px;
  padding: 12px 16px;
  align-items: center;
  gap: 10px;
  border: 1px solid
    ${({ state }) =>
      state === "error"
        ? "var(--red-500, #EF4444)"
        : state === "focus"
        ? "var(--blue-500, #3B82F6)"
        : "var(--gray-200, #E5E7EB)"};
  background: var(--gray-50, #f9fafb);
  color: var(--gray-900, #111827);
  font-family: "Pretendard", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 21px */
  resize: none;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: var(--gray-400, #9ca3af);
  }
`;
