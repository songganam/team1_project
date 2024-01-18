import React, { useState } from "react";
import { postAdd } from "../../api/todoApi";
import ResultModal from "../common/ResultModal";
import useCustomMove from "../../hooks/useCustomMove";

const initState = {
  title: "",
  writer: "",
  dueDate: "",
};

const AddComponent = () => {
  const [todo, setTodo] = useState(initState);
  const handleChange = e => {
    todo[e.target.name] = e.target.value;
    setTodo({ ...todo });
  };
  const handleClick = () => {
    // console.log(todo);
    postAdd({ todo, successFn, failFn, errFN });
  };
  const successFn = result => {
    setReDirct(0); // 0 : 목록   1: 가만있어
    setResult(true);
    setPopTitle("새글 등록 성공");
    setContent("새로운 할일이 등록되었습니다. 목록으로 이동합니다.");
  };
  const failFn = result => {
    setReDirct(1);
    setResult(true);
    setPopTitle("새글 등록 실패");
    setContent("새로운 할일이 등록에 실패하였습니다. 다시 등록해주세요.");
  };
  const errFN = result => {
    setReDirct(1);
    setResult(true);
    setPopTitle("새글 등록 실패");
    setContent("서버가 불안정합니다. 잠시후 다시 등록해주세요.");
  };

  const { moveToList } = useCustomMove();
  // 팝업창 닫을 경우 실행할 함수
  const closeModal = () => {
    // 팝업창 숨기기
    setResult(false);
    if (popRedrect === 0) {
      // 목록가기
      moveToList();
    } else {
      // 고대로 있어
    }
  };

  // 모달창 관련
  const [result, setResult] = useState(false);
  const [popTitle, setPopTitle] = useState("");
  const [popContent, setContent] = useState("");
  const [popRedrect, setReDirct] = useState(0);

  return (
    <div>
      <div>
        <div>
          <div>제목</div>
          <input
            type="text"
            name="title"
            value={todo.title}
            onChange={e => handleChange(e)}
          />
        </div>
        <div>
          <div>작성자</div>
          <input
            type="text"
            name="writer"
            value={todo.writer}
            onChange={e => handleChange(e)}
          />
        </div>
        <div>
          <div>등록일</div>
          <input
            type="date"
            name="dueDate"
            value={todo.dueDate}
            onChange={e => handleChange(e)}
          />
        </div>
        <div>
          <button type="button" onClick={() => handleClick()}>
            등록
          </button>
        </div>
      </div>

      {/* 모달창 */}
      {result ? (
        <ResultModal
          title={popTitle}
          content={popContent}
          callFn={closeModal}
        />
      ) : null}
    </div>
  );
};

export default AddComponent;
