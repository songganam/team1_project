import React, { useRef, useState } from "react";
import { postAdd } from "../../api/productApi";
import Fetching from "../common/Fetching";
import ResultModal from "../common/ResultModal";
import useCustomMove from "../../hooks/useCustomMove";

// 제품 입력시 초기값
const initState = {
  pname: "",
  pdesc: "",
  price: 0,
  files: [], // 제품이미지 여러장
};
const ProductAddComponent = () => {
  const [product, setProduct] = useState(initState);
  // 정보업데이트
  const handleChange = e => {
    // e.target.name; (DOM Element 참조)
    // e.target.value; (DOM Element 의 값)
    product[e.target.name] = e.target.value;
    setProduct({ ...product });
  };
  // 파일업로드 (꼭 형식을 지켜주세요. FB 달라요)
  // 반드시 FormData 를 이용하셔야 해요.
  // 반드시 Header 에 multipart/form-data 라고 보내야 합니다.
  // 파일 업로드가 아니더라도
  // **** 리액트에선 html 태그를 선택해야하는 경우
  // **** document.querySelect 를 활용하지 않습니다.
  // **** useRef 를 꼭 활용하세요. (DOM 요소를 참조한다.)

  // useRef 를 만들면 반드시 태그랑 연결한다.
  const uploadRef = useRef(null);

  // 로딩창 보여주기 상태
  const [fetching, setFetching] = useState(false);

  // 파일업로드 실행
  const handleClick = () => {
    // 현재 input type="file" 에 담긴 내용을 파악한다.
    // useRef 참조한 내용은 .current 에 담겨있다.
    // 담겨있는 종류가 files 즉, 복수형으로 담겨있어요.
    const files = uploadRef.current.files;
    const filesTotal = files.length;
    // console.log(images);
    // console.log(imagesTotal);
    // 아주 독특해요. 파일업로드는 달라요.
    const formData = new FormData();
    // 파일을 객체 담아주셔야합니다.
    // 파일업로드시에는 꼭 지켜주셔야 합니다.
    for (let i = 0; i < filesTotal; i++) {
      // 웹브라우저에 formData 객체에 담는다.
      console.log(files[i]);
      formData.append("files", files[i]);
    }
    formData.append("pname", product.pname);
    formData.append("pdesc", product.pdesc);
    formData.append("price", product.price);

    // console.log(product);
    // 제품 정보 전송하기
    setFetching(true);
    postAdd({ product: formData, successFn, failFn, errorFn });
  };

  const [resultTitle, setResultTitle] = useState("");
  const [resultContent, setResultContent] = useState("");
  const [reDirect, setReDirect] = useState(0);

  const successFn = result => {
    setFetching(false);
    setResultTitle("이미지 업로드");
    setResultContent("이미지 업로드에 성공하였습니다.");
    setReDirect(0);
    console.log(result);
  };
  const failFn = result => {
    setFetching(false);
    setResultTitle("이미지 업로드 오류");
    setResultContent("오류가 발생하였습니다. 잠시 후 시도해주세요.");
    setReDirect(1);
    console.log(result);
  };
  const errorFn = result => {
    setFetching(false);
    setResultTitle("서버 오류");
    setResultContent("오류가 발생하였습니다. 관리자에게 문의해 주세요.");
    setReDirect(1);
    console.log(result);
  };

  // 커스텀 훅 활용하기
  const { moveToList } = useCustomMove();
  const closeModal = () => {
    // 팝업닫기
    setResultTitle("");

    if (reDirect === 0) {
      // 목록가기
      moveToList({ page: 1 });
    } else {
      // 팝업닫기
    }
  };

  return (
    <div>
      {resultTitle !== "" ? (
        <ResultModal
          title={resultTitle}
          content={resultContent}
          callFn={closeModal}
        />
      ) : null}

      {fetching ? <Fetching /> : null}
      <div>
        <div>제품 이름</div>
        <div>
          <input
            type="text"
            name="pname"
            onChange={e => handleChange(e)}
            value={product.pname}
          />
        </div>
      </div>

      <div>
        <div>제품 설명</div>
        <div>
          <input
            type="text"
            name="pdesc"
            onChange={e => handleChange(e)}
            value={product.pdesc}
          />
        </div>
      </div>

      <div>
        <div>제품 가격</div>
        <div>
          <input
            type="number"
            name="price"
            onChange={e => handleChange(e)}
            value={product.price}
          />
        </div>
      </div>

      <div>
        <div>이미지는 여러장 업로드</div>
        <div>
          {/* ref : useRef 연결하기 */}
          {/* multiple : 파일을 여러개 업로드 */}
          <input ref={uploadRef} multiple={true} type="file" name="" />
        </div>
      </div>

      <div>
        <div>
          <button onClick={handleClick}>제품 추가</button>
        </div>
      </div>
    </div>
  );
};

export default ProductAddComponent;
