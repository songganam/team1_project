import React from "react";
import Button from "../button/Button";
import {
  AdminInfoWrapStyle,
  BackgroundBoxStyle,
  BoxInnerStyle,
  NavStyle,
  ShopStyle,
} from "./styles/ModifyStyle";

const Modify = () => {
  return (
    <AdminInfoWrapStyle>
      <NavStyle>
        <div className="pageTitle">매장 정보 관리</div>
        <div>
          <Button bttext="저장" />
        </div>
      </NavStyle>
      <ShopStyle>
        <BackgroundBoxStyle>
          <BoxInnerStyle>
            <div className="title">
              <div>매장사진</div>
              <div className="essential">*</div>
            </div>
            <div className="picsContainer">
              <div className="picsGuide">
                5MB 이하 최대 5장까지 등록 가능합니다.
              </div>
              <div>
                <Button bttext="사진등록" />
              </div>
              <div className="picsThumb">
                <input type="file" />
              </div>
            </div>
          </BoxInnerStyle>
        </BackgroundBoxStyle>
        <BackgroundBoxStyle>
          <BoxInnerStyle>
            <div className="title">
              <div>편의시설</div>
              <div className="essential">*</div>
            </div>
            <div className="checkBoxWrap">
              <form>
                <label>
                  <input type="checkbox" name="checkbox1" />
                  주차장
                </label>
                <label>
                  <input type="checkbox" name="checkbox2" />
                  화장실구분
                </label>
                <label>
                  <input type="checkbox" name="checkbox3" />
                  단체
                </label>
                <label>
                  <input type="checkbox" name="checkbox4" />
                  Wi-fi
                </label>
              </form>
            </div>
          </BoxInnerStyle>
        </BackgroundBoxStyle>
        <BackgroundBoxStyle>
          <BoxInnerStyle>
            <div className="title">
              <div>고기종류</div>
              <div className="essential">*</div>
            </div>
            <div className="radioWrap">
              <form>
                <label>
                  <input type="radio" value="option1" />
                  돼지
                </label>
                <label>
                  <input type="radio" value="option1" />소
                </label>
                <label>
                  <input type="radio" value="option1" />닭
                </label>
                <label>
                  <input type="radio" value="option1" />
                  오리
                </label>
                <label>
                  <input type="radio" value="option1" />양
                </label>
                <label>
                  <input type="radio" value="option1" />
                  정육점
                </label>
              </form>
            </div>
            <div className="textGuide">정육점 사장님은 정육점 선택</div>
          </BoxInnerStyle>
        </BackgroundBoxStyle>
        <BackgroundBoxStyle>
          <BoxInnerStyle>
            <div className="title">
              <div>상호명</div>
              <div className="essential">*</div>
            </div>
            <div>
              <form>
                <input type="text" name="name" />
              </form>
            </div>
            <div className="nameGuide">
              <div className="textGuide">한글, 영문, 특수문자 사용가능</div>
              <div className="textLength">0/30</div>
            </div>
          </BoxInnerStyle>
        </BackgroundBoxStyle>
        <BackgroundBoxStyle>
          <BoxInnerStyle>
            <div className="tel">
              <div className="title">
                <div>전화번호</div>
                <div className="essential">*</div>
              </div>
              <div>
                <form>
                  <input type="text" name="tel" />
                </form>
              </div>
            </div>
            <div className="open">
              <div className="title">
                <div>운영시간</div>
                {/* <div className="essential">*</div> */}
              </div>
              <div>
                <form>
                  <textarea />
                </form>
              </div>
              <div className="nameGuide">
                <div className="textGuide">한글, 영문, 특수문자 사용가능</div>
                <div className="textLength">0/50</div>
              </div>
            </div>
          </BoxInnerStyle>
        </BackgroundBoxStyle>
        <BackgroundBoxStyle>
          <BoxInnerStyle>
            <div className="title">
              <div>위치</div>
              <div className="essential">*</div>
            </div>
            <div className="locationBox">
              <div className="locationInputBox">
                <div>
                  <form>
                    <input type="text" name="adress" />
                  </form>
                </div>
                <div>
                  <form>
                    <input type="text" name="adressDetail" />
                  </form>
                </div>
              </div>
              <div>
                <Button bttext="주소 검색" />
              </div>
            </div>
          </BoxInnerStyle>
        </BackgroundBoxStyle>
        <BackgroundBoxStyle>
          <BoxInnerStyle>
            <div className="title">
              <div>예약금</div>
              <div className="essential">*</div>
            </div>
            <div>
              <form>
                <input type="text" name="deposit" />
              </form>
            </div>
            <div className="textGuide">숫자만 사용가능, 단위: 원</div>
          </BoxInnerStyle>
        </BackgroundBoxStyle>
      </ShopStyle>
    </AdminInfoWrapStyle>
  );
};

export default Modify;
