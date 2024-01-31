import React, { useState } from "react";

const Rating = () => {
  const noCountStar =
    process.env.PUBLIC_URL + `/assets/images/star_no_count.svg`;
  const countStar = process.env.PUBLIC_URL + `/assets/images/star_count.svg`;

  const [product, setProduct] = useState({ star: 0 });
  return <div>Rating</div>;
};

export default Rating;
