import React, { useEffect, useState } from "react";
import { getOne } from "../../api/todoApi";
import useCustomMove from "../../hooks/useCustomMove";

// 기본 서버호출시 화면출력 데이터
const initData = {
  tno: 0,
  title: "",
  writer: "",
  complete: false,
  dueDate: "",
};

const ReadComponent = ({ tno }) => {
  const { moveToList, moveToModify } = useCustomMove();

  // 화면에 자료 가 바뀌면 출력
  const [todo, setTodo] = useState(initData);
  // 현재 읽기 번호가 바뀌면 화면 출력
  // 배열의 작성한 변수가 바뀌면 함수 호출
  useEffect(() => {
    // 하나의 자료만 가져온다.
    getOne(tno)
      .then(result => {
        setTodo(result);
      })
      .catch(error => {
        console.log(error);
      });
  }, [tno]);

  return (
    <div>
      <div>번호 : {todo.tno} </div>
      <div>작성자 : {todo.writer} </div>
      <div>제목 : {todo.title} </div>
      <div>날짜 : {todo.dueDate} </div>
      <div>완료여부 : {todo.complete ? "완료" : "미완료"} </div>
      <div>
        <button
          onClick={() => {
            moveToList();
          }}
        >
          목록으로 가기
        </button>

        <button
          onClick={() => {
            moveToModify(tno);
          }}
        >
          수정하기
        </button>
      </div>
    </div>
  );
};

export default ReadComponent;
