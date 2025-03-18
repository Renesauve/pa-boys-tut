import React from "react";
import Hero from "@/components/hero";

function index(props) {
  return (
    <div>
      <h1>Hello Senoir Stinky buns</h1>
      <Hero
        title={"Chases Hero"}
        description={"Chases Hero Page description"}
        image={"https://i.imgur.com/IOiynKC.jpeg"}
      />
    </div>
  );
}

export default index;
