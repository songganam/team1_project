import React from "react";
import Button from "../button/Button";

const Modify = () => {
  return (
    <div className="adminWrap">
      <div className="navStyle">
        <div className="pageTitle">매장 정보 관리</div>
        <div>
          <Button bttext="저장" />
        </div>
      </div>
      <div className="shopStyle">
        <div className="picsStyle">
          <div className="picsInner">
            <div className="picsTitle">
              <div>매장사진</div>
              <div className="essential">*</div>
            </div>
            <div className="picsContainer">
              <div className="picsGuide">
                5MB 이하 최대 5장까지 등록 가능합니다.
              </div>
            </div>
          </div>
        </div>
        <div className="ifacilStyle">
          <div className="ifacilInner"></div>
        </div>
        <div className="imeatStyle">고기종류</div>
        <div className="nameStyle">상호명</div>
        <div className="telOpenStyle">전화번호/운영시간</div>
        <div className="locationStyle">위치</div>
        <div className="depositStyle">예약금</div>
      </div>
    </div>
  );
};

export default Modify;
