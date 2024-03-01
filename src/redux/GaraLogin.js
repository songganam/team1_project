import { useEffect, useState } from "react";
import { getAllUserInfo } from "../api/garaApi";
import useCustomHook from "../components/meat/hooks/useCustomHook";

const GaraLogin = () => {
  // !--------------------------------------------------
  // ! 잘 참고해서 만드시면 될 듯해요.
  // ! 거의 모르신다는 가정하에 코멘트로 작성하겠습니다. (이유 : 시간이 없기때문에 양해해주십시옹), 이 후 공부용으로 참고하셔도 좋습니다.
  // ! /api/garaApi 와 같이 봐주십시오!
  // ! 시작할께욧!!
  // !--------------------------------------------------!

  // ? useState => [초기값(변경될 값), 변경하려는 주머니] => [초기에 Get으로 받는 데이터, 담는 주머니]
  const [data, setData] = useState();

  // ? 커스텀훅 그게뭐임? 학원에서 설명드리겠습니다! 일딴 페이지를 1,2,3,4,5 누르면 그 값을 자동적으로 넣어주는
  // ? 기능을 한다고 생각해주세요!
  const { page } = useCustomHook();
  // ? 난 search도 있는데?
  // const {page,search} = useCustomHook();

  // ? useEffect(()=>{},[]) =>useEffect(()=>{함수},[의존성])
  // ? 의존성이 뭐임 ? : 의존성값이 변할 때 리렌더링이 발생한다. => 페이지가 갱신된다!
  // ? 처음 : 함수실행 => 의존성 값이 변경됨 => 변했네? => 함수 다시 실행
  useEffect(() => {
    // 처음에 우리는 뭘해야할까요?
    // 데이터를 불러온다. 테이블에 보여줘야하니까!
    // 페이지 별로 10개를 받기로 했으니까? 페이지별로 보여줘야죠!
    const params = { page };
    // 만약에 ? 난 search 도 있는데?
    // const params { page, search}

    // 파라미터(페이지), 성공!, 실패!, 오류!
    getAllUserInfo({ params, successFn, failFn, errorFn });
  }, [page]);

  // ? 시나리오 1: 성공했을 때
  const successFn = response => {
    // 변경하려눈 주머니에 성공한 값을 넣어준다! => 그럼어떻게 되죠? => data값이 바뀐다.
    setData(response);
    // console.log("데이터야이거 ", data);
  };
  // ? 시나리오 2: 실패했을 때
  const failFn = response => {
    console.log(response);
  };
  // ? 시나리오 3: 통신자체를 실패했을 때
  const errorFn = response => {
    console.log(response);
  };

  return (
    <div>
      <div>
        <h1>테이블 예시입니다 맵포함</h1>
        <div>
          <table>
            <thead>
              <th>순번</th>
              <th>이름</th>
              <th>ID</th>
              <th>사업자등록번호</th>
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
              {data?.map((item, index) => (
                // ? Key? 기준값!
                // ? 기준값? 절대 중복될 수없는 유니크한 값! (a.k.a 주민등록번호)
                // ? iuser 고유한 값이네?
                <tr key={item.iuser}>
                  {/* data 안에 있는 name, id , number, state */}
                  <td>{index}</td>
                  <td>{item?.name}</td>
                  <td>{item?.id}</td>
                  <td>{item?.number}</td>
                  <td>{item?.state}</td>
                  <td>
                    <button>잠금</button>
                  </td>
                  <td>
                    <button>해제</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default GaraLogin;
