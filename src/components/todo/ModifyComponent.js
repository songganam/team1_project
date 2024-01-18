import React, { useEffect, useState } from "react";
import { deleteOne, getOne, putOne } from "../../api/todoApi";
import ResultModal from "../common/ResultModal";
import useCustomMove from "../../hooks/useCustomMove";

// 초기데이터
const initState = {
  tno: 0,
  title: "",
  writer: "",
  dueDate: "",
  complete: false,
};

const ModifyComponent = ({ tno }) => {
  const [todo, setTodo] = useState(initState);
  // 의존성 배열 안쪽에 변하는 상태를 입력하여 데이터 호출, 출력
  useEffect(() => {
    // 여기서는 tno 를 이용해서 자료 1개 가져온다.
    getOne(tno)
      .then(result => setTodo(result))
      .catch(error => console.log(error));
  }, [tno]);

  const handleChange = e => {
    // e.target.name;
    // e.target.value;
    todo[e.target.name] = e.target.value;
    setTodo({ ...todo });
  };
  const handleChangeComplete = e => {
    // e.target.name;
    // e.target.value;
    const value = e.target.value;
    todo.complete = value === "Y";
    setTodo({ ...todo });
  };

  const handleClickDelete = () => {
    deleteOne({
      tno,
      successFn: successFnDelete,
      failFn: failFnDelete,
      errFn: errFnDelete,
    });
  };
  // 삭제관련 함수
  const successFnDelete = result => {
    setResult(true);
    setPoptitle("게시물 삭제");
    setPopConent("게시물 삭제에 성공하였습니다.");
    setReDirect(0);
    // console.log(result);
  };
  const failFnDelete = result => {
    setResult(true);
    setPoptitle("게시물 삭제");
    setPopConent("게시물 삭제에 실패하였습니다. 다시 시도하세요.");
    setReDirect(1);
  };
  const errFnDelete = result => {
    setResult(true);
    setPoptitle("게시물 삭제");
    setPopConent("게시물 삭제에 실패하였습니다. 서버가 오류입니다.");
    setReDirect(1);
  };

  const handleClickModify = () => {
    putOne({
      todo,
      successFn: successFnModify,
      failFn: failFnModify,
      errFn: errFnModify,
    });
  };
  // 수정관련 함수
  const successFnModify = result => {
    setResult(true);
    setPoptitle("게시물 수정");
    setPopConent("게시물 수정에 성공하였습니다.");
    // 읽기상태로 간다.
    setReDirect(2);
  };
  const failFnModify = result => {
    setResult(true);
    setPoptitle("게시물 수정");
    setPopConent("게시물 수정에 실패하였습니다. 다시 시도해주세요.");
    setReDirect(1);
  };
  const errFnModify = result => {
    setResult(true);
    setPoptitle("게시물 수정");
    setPopConent("서버가 불안정합니다. 다시 시도해주세요.");
    setReDirect(1);
  };

  // 팝업창 내용
  const [popTitle, setPoptitle] = useState("");
  const [popContent, setPopConent] = useState("");

  // 창을 닫은 경우 어디로 이동할지를 결정
  // 목록으로 가거나 아니면, 그냥 수정창 상태로 두거나
  const [reDirect, setReDirect] = useState(0);

  // 안내창이 열릴지 말지 결정하는 상태
  const [result, setResult] = useState(false);

  const { moveToList, moveToRead } = useCustomMove();

  // 0 이면  1 이면 창닫기
  const closeModal = () => {
    setResult(false);
    if (reDirect === 0) {
      // 목록으로 : 페이지 상태 유지하면서 이동
      moveToList({ page: 1 });
    } else if (reDirect === 2) {
      // 읽기로 페이지 이동한다.
      moveToRead(tno);
    }
  };

  return (
    <div>
      {/* 모달창 */}
      {result ? (
        <ResultModal
          title={popTitle}
          content={popContent}
          callFn={closeModal}
        />
      ) : null}

      <div>
        <div>글번호</div>
        <div>{tno}</div>
      </div>
      <div>
        <div>작성자</div>
        <div>{todo.writer}</div>
      </div>
      <div>
        <div>제목</div>
        <div>
          <input
            type="text"
            name="title"
            value={todo.title}
            onChange={e => handleChange(e)}
          />
        </div>
      </div>
      <div>
        <div>작성날짜</div>
        <div>
          <input
            type="date"
            name="dueDate"
            value={todo.dueDate}
            onChange={e => handleChange(e)}
          />
        </div>
      </div>
      {/* 할일 완료 여부 */}
      <div>
        <div>완료여부</div>
        <div>
          <select
            name="status"
            value={todo.complete ? "Y" : "N"}
            onChange={e => handleChangeComplete(e)}
          >
            <option value="Y">완료</option>
            <option value="N">미완료</option>
          </select>
        </div>
      </div>
      <div>
        <button type="button" onClick={handleClickDelete}>
          삭제
        </button>
        <button type="button" onClick={handleClickModify}>
          수정
        </button>
      </div>
    </div>
  );
};

export default ModifyComponent;
