import React from "react";
import styled from "@emotion/styled";
const CountingStar = ({ star }) => {
  const noCheck = process.env.PUBLIC_URL + `/assets/images/review_n_count.png`;
  const Check = process.env.PUBLIC_URL + `/assets/images/review_count.png`;
  const starCount = new Array(5).fill(noCheck);

  const StarStyle = styled.div`
    display: flex;
    gap: 5px;
    img {
      width: 20px;
      height: 20px;
    }
  `;
  for (let i = 0; i < star; i++) {
    starCount[i] = Check;
  }
  return (
    <StarStyle>
      {starCount.map((star, index) => (
        <img key={index} src={star} alt="star" />
      ))}
    </StarStyle>
  );
};

export default CountingStar;
