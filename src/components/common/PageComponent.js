import React from "react";
import useCustomMove from "../../hooks/useCustomMove";

const PageComponent = ({ serverData }) => {
  const { moveToList } = useCustomMove();

  return (
    <div>
      {/* 이전버튼 */}
      {serverData.prev ? (
        <button
          onClick={() => moveToList({ page: serverData.prevPage, size: 10 })}
        >
          prev
        </button>
      ) : null}
      {/* 페이지 이동번호 */}
      {serverData.pageNumList.map(item => (
        <button
          key={item}
          onClick={() => {
            moveToList({ page: item });
          }}
        >
          {item}
        </button>
      ))}
      {/* 다음버튼 */}
      {serverData.next ? (
        <button
          onClick={() => moveToList({ page: serverData.nextPage, size: 10 })}
        >
          next
        </button>
      ) : null}
    </div>
  );
};

export default PageComponent;
