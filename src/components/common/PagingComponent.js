import React from "react";

const PagingComponent = ({ serverData, movePage }) => {
  return (
    <div>
      {/* 이전 버튼 */}
      {serverData.prev ? (
        <button
          onClick={() => {
            movePage(serverData.prevPage);
          }}
        >
          이전으로
        </button>
      ) : null}
      {/* 페이지 이동 번호 */}
      {serverData.pageNumList.map(item => (
        <button
          key={item}
          onClick={() => {
            movePage(item);
          }}
        >
          {item}
        </button>
      ))}
      {/* 다음 버튼 */}
      {serverData.nex ? (
        <button
          onClick={() => {
            movePage(serverData.nextPage);
          }}
        >
          다음으로
        </button>
      ) : null}
    </div>
  );
};

export default PagingComponent;
