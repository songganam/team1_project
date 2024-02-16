import styled from "@emotion/styled";
export const CateSelectWrap = styled.div`
  width: 501px;
  height: 50px;
  display: flex;
`;

export const SelectedCate = styled.div`
  font-family: DAEAM_LEE_TAE_JOON;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 250px;
  height: 50px;

  cursor: pointer;
  background: ${({ selected }) =>
    selected ? "var(--gray-scale-0, #fff)" : "var(--gray-scale-100, #f5f5f5)"};
  border-top: ${({ selected }) =>
    selected ? "5px solid var(--sub, #066e52)" : "none"};
  border-right: ${({ selected }) =>
    selected ? "1px solid var(--sub, #066e52)" : "none"};
  border-left: ${({ selected }) =>
    selected ? "1px solid var(--sub, #066e52)" : "none"};

  border-bottom: ${({ selected }) =>
    selected ? "none" : "1px solid var(--sub, #066e52)"};
  color: ${({ selected }) => (selected ? "black" : "rgba(0,0,0,0.5)")};
  transition: color 0.3s ease;

  &:hover {
    background: ${({ selected }) =>
      selected
        ? "var(--gray-scale-0, #fff)"
        : "var(--gray-scale-100, #f5f5f5)"};
  }
`;
