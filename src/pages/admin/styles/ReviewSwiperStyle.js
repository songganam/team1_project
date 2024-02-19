import styled from "@emotion/react";
export const Swiper = styled.div`
  width: 300px;
  height: 280px;
  margin-left: auto;
  margin-right: auto;
  swiper-slide {
    background-size: cover;
    background-position: cover;

    main-swiper {
      width: 300px;
      height: 80%;
    }
    sub-swiper {
      width: 300px;
      height: 20%;
      box-sizing: border-box;
      padding: 10px 0;
    }
    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;
