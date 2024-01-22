import styled from "@emotion/styled";
import { ColorStyle, FontSize } from "../../../styles/common/CommonStyle";

export const WrapStyle = styled.div`
  position: relative;
  margin: 0 18vw 50px 18vw;
  flex-wrap: wrap;
  gap: auto;
  @media (max-width: 1680px) {
    margin: 0 50px 50px 50px;
  }
`;

export const TableStyle = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  padding-top: 3rem;
  padding-bottom: 0.3rem;
  font-family: "DAEAM_LEE_TAE_JOON";
  font-size: ${FontSize.strong};
  @media (max-width: 980px) {
    display: none;
  }
`;
export const TtableStyle = styled(TableStyle)`
  padding: 10px 0;
  border-top: 1px solid ${ColorStyle.g500};
  background: ${props => (props.selected ? ColorStyle.g200 : null)};
  &:hover {
    background: ${ColorStyle.g200};
  }
  @media (max-width: 980px) {
    display: block;
  }
`;
export const TnoStyle = styled.div`
  position: relative;
  display: flex;
  width: 132px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  color: ${props => props.color};
  @media (max-width: 1200px) {
    display: none;
  }
`;
export const TitleStyle = styled.div`
  position: relative;
  padding: 10px;
  justify-content: ${props => props.justifyContent};
  align-items: center;
  cursor: pointer;
  /* 1줄 말줄임 */
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const InfoStyle = styled.div`
  position: relative;
  display: flex;
  padding: 10px 0;
  justify-content: space-between;
  @media (max-width: 980px) {
    display: none;
  }
  div {
    width: 160px;
    display: flex;
    justify-content: center;
    color: ${props => props.color};
  }
`;

export const TopenStyle = styled.div`
  position: relative;
  padding: 30px 60px;
  display: flex;
  flex-wrap: wrap;
  gap: 100px;
  border: 1px solid ${ColorStyle.g500};
`;
export const ImgStyle = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const LargeImgStyle = styled.div`
  position: relative;
  max-width: 300px;
  min-width: 60px;
  img {
    width: 100%;
    border-radius: 5px;
    box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.25);
  }
`;
export const ThumbnailStyle = styled.div`
  position: relative;
  max-width: 300px;
  max-height: 180px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  img {
    max-width: 60px;
    height: 50px;
    border-radius: 5px;
    box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.25);
  }
`;
export const ContentInfoStyle = styled.div`
  position: relative;
  width: 660px;
  display: flex;
  flex-direction: column;
  gap: 34px;
`;
export const ContentStyle = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 34px;
  div {
    font-size: ${FontSize.strong};
  }
`;
export const UserStyle = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  gap: 20px;
  img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  }
`;
export const NameStyle = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 9px;
  color: ${ColorStyle.g900};
`;
export const TagBoxStyle = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 10px;
`;
export const SummaryStyle = styled.div`
  position: relative;
  display: -webkit-box;
  /* 2줄이상 말줄임 */
  overflow: hidden;
  word-break: break-all;
  text-overflow: ellipsis;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  color: ${ColorStyle.g600};
`;

export const BtnStyle = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
`;

const breakpoints = {
  mobile: 600,
  tablet: 900,
};

const mediaQueries = key => {
  return style => `@media (max-width: ${breakpoints[key]}px) { ${style} }`;
};

export const PagingBoxStyle = styled.div`
  position: relative;
  display: flex;
  padding: 30px 50px;
  justify-content: center;
  align-items: center;
  border-top: 1px solid ${ColorStyle.g500};
  button {
    background: none;
    border: none;
    padding: 10px;
    margin: 0;
    font: inherit;
    font-size: ${FontSize.strong};
    color: ${ColorStyle.g700};
    cursor: pointer;
    &:hover {
      color: ${ColorStyle.g900};
      font-weight: bold;
    }

    ${mediaQueries("tablet")`
      &:not(:first-of-type):not(:last-of-type) {
        &:nth-last-of-type(-n+3) { 
          display: none;
        }
      }
    `}

    ${mediaQueries("mobile")`
      &:not(:first-of-type):not(:last-of-type) {
        &:nth-last-of-type(-n+7) {
          display: none;
        }
      }
    `}
  }
`;
export const PagingNumStyle = styled.button`
  background: none;
  border: none;
  padding: 10px;
  margin: 0;
  font-size: ${FontSize.strong};
`;

export const SearchStyle = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  padding: 0 50px;
  justify-content: center;
  align-items: center;
  gap: 3px;
  img {
    width: 34px;
    background: ${ColorStyle.g400};
    cursor: pointer;
  }
  select {
    position: relative;
    appearance: none;
    width: 92px;
    height: 35px;
    padding: 5px 20px;
    border: 1px solid ${ColorStyle.g400};
    font-size: ${FontSize.default};
    color: ${ColorStyle.g500};
    background: url("/assets/images/down.svg") no-repeat right center;
  }
  input {
    position: relative;
    appearance: none;
    width: 240px;
    height: 35px;
    padding: 5px 20px;
    border: 1px solid ${ColorStyle.g400};
    font-size: ${FontSize.default};
    color: ${ColorStyle.g500};
  }
`;

export const TableFootStyle = styled.div`
  position: relative;
  margin-top: 50px;
  display: flex;
  justify-content: flex-end;
`;
