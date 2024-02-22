import React from "react";
import {
  SupervisorReportHeader,
  SvisorReportWrap,
} from "../supervisor/styles/SupervisorReportStyle";
import Button from "../../components/button/Button";
import {
  AdminDocBoard,
  AdminDocBox,
  AdminDocContainer,
  AdminDocMain,
  BoxContent,
  BoxTop,
  DocMainTop,
} from "./styles/AdminDocStyle";
import {
  BackgroundBoxStyle,
  BoxInnerStyle,
} from "../../components/adminInfo/styles/ModifyStyle";
import AdminHeader from "../../components/adminInfo/AdminHeader";

const AdminDocPage = () => {
  return (
    <SvisorReportWrap>
      <AdminHeader title="매장 분석" />

      <AdminDocMain>
        <DocMainTop>
          <div className="title">
            <span>Month</span>
          </div>
        </DocMainTop>
        <AdminDocBoard>
          <AdminDocBox>
            <BoxTop>
              <span>북마크</span>
            </BoxTop>
            <BoxContent>
              <span>123</span>
            </BoxContent>
          </AdminDocBox>
          <AdminDocBox>
            <BoxTop>
              <span>예약</span>
            </BoxTop>
            <BoxContent>
              <span>34</span>
            </BoxContent>
          </AdminDocBox>
          <AdminDocBox>
            <BoxTop>
              <span>리뷰</span>
            </BoxTop>
            <BoxContent>
              <span>34</span>
            </BoxContent>
          </AdminDocBox>
          <AdminDocBox>
            <BoxTop>
              <span>별점</span>
            </BoxTop>
            <BoxContent>
              <span>34</span>
            </BoxContent>
          </AdminDocBox>
          
        </AdminDocBoard>
      </AdminDocMain>
    </SvisorReportWrap>
  );
};

export default AdminDocPage;
