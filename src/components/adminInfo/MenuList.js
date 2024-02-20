import React from "react";
import {
  AdminInfoWrapStyle,
  BackgroundBoxStyle,
  BoxInnerStyle,
  MenuAddPicInnerStyle,
  NavStyle,
  ShopStyle,
} from "./styles/ModifyStyle";
import Button from "../button/Button";
import Menu from "./Menu";

const MenuList = () => {
  return (
    <AdminInfoWrapStyle>
      <NavStyle>
        <div className="page-title">메뉴 관리</div>
        <div>
          <Button bttext="저장" />
        </div>
      </NavStyle>
      <ShopStyle>
        <BackgroundBoxStyle>
          <BoxInnerStyle>
            <div className="title">
              <div>메뉴목록</div>
              {/* <div className="essential">*</div> */}
            </div>
            <div className="menu-pics">
              <Menu />
              <Menu />
              <Menu />
              <Menu />
              <Menu />
              <Menu />
            </div>
          </BoxInnerStyle>
        </BackgroundBoxStyle>
        <BackgroundBoxStyle>
          <MenuAddPicInnerStyle>
            <div className="menu-add-pic">
              <div className="title">
                <div>메뉴사진</div>
                <div className="essential">*</div>
              </div>
              <div className="pics-container">
                <div className="text-guide">
                  5MB 이하 이미지 등록 가능합니다.
                </div>
                <div>
                  <Button bttext="사진등록" />
                </div>
                <div className="pics-thumb">
                  <input type="file" />
                </div>
              </div>
            </div>
            <div className="btn-wrap">
              <div>
                <Button bttext="초기화" />
              </div>
              <div>
                <Button bttext="등록" />
              </div>
            </div>
          </MenuAddPicInnerStyle>
          <BoxInnerStyle>
            <div className="title">
              <div>메뉴이름</div>
              <div className="essential">*</div>
            </div>
            <div>
              <form>
                <input type="text" name="name" />
              </form>
            </div>
            <div className="name-guide">
              <div className="text-guide">
                숫자, 한글, 영문, 특수문자 사용가능
              </div>
              <div className="text-length">0/30</div>
            </div>
          </BoxInnerStyle>
          <BoxInnerStyle>
            <div className="title">
              <div>메뉴가격</div>
              <div className="essential">*</div>
            </div>
            <div>
              <form>
                <input type="text" name="deposit" />
              </form>
            </div>
            <div className="text-guide">숫자만 사용가능, 단위: 원</div>
          </BoxInnerStyle>
        </BackgroundBoxStyle>
      </ShopStyle>
    </AdminInfoWrapStyle>
  );
};

export default MenuList;
