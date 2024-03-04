import React, { useEffect, useState } from "react";
import {
  SupervisorReportContents,
  SupervisorReportHeader,
  SupervisorReportWrapper,
  SupervisorTable,
} from "./styles/SupervisorReportStyle";
import useCustomHook from "../../components/meat/hooks/useCustomHook";
import { getReport, patchReport, patchReportCancel } from "../../api/reportApi";
import Button from "../../components/button/Button";

const SupervisorReportPage = () => {
  const [reportData, setReportData] = useState([]);
  const { page, check, moveToCheck } = useCustomHook();
  // 신고글 가져오기 (API)
  useEffect(() => {
    const params = { page, check };
    getReport({ params, successFn, failFn, errorFn });
  }, [page, check]);

  const successFn = res => {
    setReportData(res);
  };

  const failFn = res => {
    setReportData(res);
  };

  const errorFn = res => {
    setReportData(res);
  };

  // 신고글 숨김
  const handleClickHide = result => {
    console.log(result);
    const hideForm = {
      check: Number(selectedCategory),
      pk: result,
    };
    console.log("hideform test : ", hideForm);
    patchReport({ hideForm, successHideFn, failHideFn, errorHideFn });
  };
  const successHideFn = res => {
    console.log(res);
  };
  const failHideFn = res => {
    console.log(res);
  };
  const errorHideFn = res => {
    console.log(res);
  };

  // 신고 취소하기
  const handleClickReportCancel = result => {
    console.log(result);
    const cancelForm = {
      check: Number(selectedCategory),
      pk: result,
    };
    console.log("cancelForm test : ", cancelForm);
    // patchReport({ hideForm, successHideFn, failHideFn, errorHideFn });
    patchReportCancel({
      cancelForm,
      successCancelFn,
      failCancelFn,
      errorCancelFn,
    });
  };
  const successCancelFn = res => {
    console.log(res);
  };
  const failCancelFn = res => {
    console.log(res);
  };
  const errorCancelFn = res => {
    console.log(res);
  };

  const [selectedCategory, setSelectedCategory] = useState(0);

  const handleCategoryChange = event => {
    const selectedValue = event.target.value;
    setSelectedCategory(selectedValue);
    console.log("카테", selectedValue);
    moveToCheck({ check: selectedValue });
  };

  return (
    <SupervisorReportWrapper>
      <SupervisorReportHeader>
        <div className="page-title">신고 관리</div>
        <div>
          <Button bttext="저장" />
        </div>
      </SupervisorReportHeader>
      <SupervisorReportContents>
        <h1>테이블 예시입니다 맵포함</h1>
        <div>
          {/* <select  */}
          <label htmlFor="category">카테고리 선택 : </label>
          <select
            id="category"
            name="category"
            onChange={handleCategoryChange}
            value={selectedCategory}
          >
            <option value="0">고기잡담 글</option>
            <option value="1">고기잡담 댓글</option>
            <option value="2">고기집 후기</option>
            <option value="3">정육점 후기</option>
          </select>
        </div>
        <SupervisorTable>
          <table>
            <thead>
              <th>순번</th>
              {/* <th>카테고리</th> */}
              <th>내용</th>
              <th>작성자</th>
              <th>신고 수</th>
              <th>상태</th>
              <th>계정잠금</th>
            </thead>
            <tbody>
              {/* 여기다가 맵을 돌리는거죠! */}
              {/* 왜 data머시긴가요? useState 다시 설명읽기! */}
              {/*
                   데이터(data)를 반복할꺼야(map)
                   data를 앞으로 item이라 부를꺼야
                   순서를 index라 할꺼야
                   */}
              {reportData?.map((item, index) => (
                // ? Key? 기준값!
                // ? 기준값? 절대 중복될 수없는 유니크한 값! (a.k.a 주민등록번호)
                // ? iuser 고유한 값이네?
                <tr key={item?.pk}>
                  {/* data 안에 있는 name, id , number, state */}
                  <td>{index}</td>
                  <td>{item?.contents}</td>
                  <td>{item?.writerNm}</td>
                  <td>{item?.count}</td>
                  <td>{item?.state}</td>

                  <td>
                    <button onClick={() => handleClickReportCancel(item.pk)}>
                      신고취소
                    </button>
                  </td>

                  <td>
                    <button onClick={() => handleClickHide(item.pk)}>
                      글숨김
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </SupervisorTable>
      </SupervisorReportContents>
    </SupervisorReportWrapper>
  );
};

export default SupervisorReportPage;
