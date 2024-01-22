import styled from "@emotion/styled";
import { ColorStyle, FontSize } from "../../../styles/common/CommonStyle";

export const ListWrap = styled.div`
  width: 1180px;
  margin: 0 auto;
`;
export const KindOfMeatWrap = styled.div`
  display: flex;
  width: 1180px;
  padding: 30px 0px;
  align-items: flex-end;
  gap: 100px;
  margin: 30px 10px;
`;
export const KindOfMeat = styled.div`
  cursor: pointer;
  width: 70px;
  height: 50px;
  flex-shrink: 0;
  img {
    width: 70px;
    height: 50px;
  }
  span {
    font-family: DAEAM_LEE_TAE_JOON;
    font-size: ${FontSize.title};
  }
`;
export const SearchWrap = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  gap: 3px;
`;
export const SearchBar = styled.div`
  display: flex;
  height: 35px;
  padding: 5px 20px;
  align-items: center;
  gap: 10px;
  border: 1px solid var(--gray-scale-400, #a8a8a8);
  background: #fff;
`;
export const SearchInput = styled.input`
  /* color: var(--gray-scale-500, #8f8f8f); */
  /* Rugular 14 */
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%; /* 17.5px */
  border: none;
`;
export const SearchIconWrap = styled.div`
  cursor: pointer;
  display: flex;
  width: 35px;
  height: 35px;
  justify-content: center;
  align-items: center;
  background: var(--gray-scale-400, #a8a8a8);
  button {
    width: 24px;
    height: 24px;
    flex-shrink: 0;
  }
`;
export const ListFilter = styled.div`
  float: right;
  display: flex;
  align-items: flex-start;
  gap: 20px;
`;
export const ListFilterItem = styled.button`
  cursor: pointer;
  display: flex;
  border: none;
  background: transparent;
  width: 50px;
  height: 30px;
  flex-direction: column;
  justify-content: center;
  span {
    color: ${props => (props.active ? ColorStyle.g1000 : ColorStyle.g500)};
    text-align: center;
    font-feature-settings: "clig" off, "liga" off;
    font-family: DAEAM_LEE_TAE_JOON;
    font-size: 19px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px; /* 84.211% */
    text-transform: uppercase;
  }
`;
export const ListMoreViewBtnWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
`;
export const ListMoreViewBtn = styled.button`
  display: flex;
  padding: 10px 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  border: 2px solid var(--sub, #066e52);
  background: #fff;
  span {
    color: var(--primary, #d60117);
    text-align: center;
    font-family: DAEAM_LEE_TAE_JOON;
    font-size: 19px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%; /* 23.75px */
  }
`;
