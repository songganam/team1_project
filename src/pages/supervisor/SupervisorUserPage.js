import React from "react";
import {
  SupervisorReportHeader,
  SvisorReportMain,
  SvisorReportWrap,
} from "./styles/SupervisorReportStyle";
import Button from "../../components/button/Button";
import {
  SupervisorUserWrapper,
  SvisorTable,
  SvisorTbody,
  SvisorThead,
  SvisorUserHeader,
  SvisorUserMain,
  SvisorUserWrap,
} from "./styles/SupervisorUserStyle";

const SupervisorUserPage = () => {
  return (
    <SvisorUserWrap>
      <SvisorUserHeader>
        <div className="page-title">유저 관리</div>
        <div>
          <Button bttext="저장" />
        </div>
      </SvisorUserHeader>
      <SvisorUserMain>
        <meta charset="UTF-8" />
        <div
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></div>

        <body>
          <SvisorTable>
            <SvisorThead>
              <tr
              // style={{
              //   border: "1px solid #DBDBDB",
              //   padding: "8px",
              //   borderBottom: "1px solid #DBDBDB",
              //   borderLeft: "0px solid #DBDBDB",
              //   borderRight: "0px solid #DBDBDB",
              //   textAlign: "center",
              // }}
              // className="tableHeader"
              >
                <th>순번</th>
                <th>이름</th>
                <th>아이디</th>
                <th>사업자등록번호</th>
                <th>상태</th>
                <th>계정잠금</th>
                <th>계정해제</th>
              </tr>
            </SvisorThead>
            <SvisorTbody>
              <tr>
                <td>1</td>
                <td>홍길동</td>
                <td>hong123</td>
                <td>123-45-67890</td>
                <td>활성</td>
                <td>
                  <button onClick="unlockAccount">계정잠금</button>
                </td>
                <td>
                  <button onClick="unlockAccount">계정해제</button>
                </td>
              </tr>
              {/* <!-- 여기에 추가적인 계정 정보를 추가할 수 있습니다. --> */}
            </SvisorTbody>
          </SvisorTable>

          <script>
            function unlockAccount(accountNumber){" "}
            {
              // 여기에 계정 해제 로직을 추가하세요.
              // alert('계정이 성공적으로 해제되었습니다.');
            }
          </script>
        </body>
      </SvisorUserMain>
    </SvisorUserWrap>
  );
};

export default SupervisorUserPage;
