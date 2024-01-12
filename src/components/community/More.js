import React from "react";
import {
  ContentInfoStyle,
  ContentStyle,
  ImgStyle,
  LargeImgStyle,
  NameStyle,
  ThumbnailStyle,
  UserStyle,
} from "./styles/ListStyle";
import { MoreBoxStyle, MoreStyle } from "./styles/ReadStyle";

const More = () => {
  return (
    <MoreBoxStyle>
      <ImgStyle>
        <LargeImgStyle>
          <img
            src="https://picsum.photos/300/180/?category=meat"
            alt="업로드 이미지"
          />
        </LargeImgStyle>
        <ThumbnailStyle>
          <div className="thumbnail">
            <img
              src="https://picsum.photos/60/50/?category=meat"
              alt="업로드 이미지"
            />
          </div>
          <div className="thumbnail">
            <img
              src="https://picsum.photos/60/50/?category=meat"
              alt="업로드 이미지"
            />
          </div>
          <div className="thumbnail">
            <img
              src="https://picsum.photos/60/50/?category=meat"
              alt="업로드 이미지"
            />
          </div>
          <div className="thumbnail">
            <img
              src="https://picsum.photos/60/50/?category=meat"
              alt="업로드 이미지"
            />
          </div>
        </ThumbnailStyle>
      </ImgStyle>
      <ContentInfoStyle>
        <ContentStyle>
          <UserStyle>
            <img src="/assets/images/avatar.svg" alt="프로필사진" />
            <NameStyle>
              <div>어쭈구리고기봐라</div>
              {/* <TagBoxStyle>
                <Tag tagtext="#동성로" />
                <Tag tagtext="#모듬한판" />
                <Tag tagtext="#퇴근길" />
              </TagBoxStyle> */}
            </NameStyle>
          </UserStyle>
          <MoreStyle>
            퇴근하고 집에 가는데 고기가 너무 먹고싶어서 들렀음!! 요즘에 다
            구워주긴 하지만 여기는 아예 주방에서 구워서 나옴, 근데 다 식으면
            어쩌나 했는데, 따뜻하게 먹을 수 있게 그거 뭐라 그러냐 고체 연료
            같은거 같이 나와서 그릇 계속 데워줌 맥주 미친듯이 들어감 짱!! 곧
            웨이팅 미친듯이 있을듯 미리 고기로에서 예약하고 가야할듯 술도 하이볼
            뿐만아니라 평소 보지 못했던 맥주들도 많고 여튼 무조건 가야함 나
            당분간 고깃집은 여기만 계속 갈듯!!
          </MoreStyle>
        </ContentStyle>
      </ContentInfoStyle>
    </MoreBoxStyle>
  );
};

export default More;
