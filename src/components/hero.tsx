import React from "react";
import Image from "next/image";
function Hero(props) {
  const { title, description, image } = props;
  return (
    <div>
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <Image src={image} alt="alt text" width={300} height={300} />
    </div>
  );
}

export default Hero;
