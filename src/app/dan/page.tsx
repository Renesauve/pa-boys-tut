import React from "react";
import Hero from "@/components/hero";

function index(props) {
  return (
    <div>
      <h1>Hello Dan</h1>
      <Hero
        title={"Dans Hero"}
        description={"Dans Hero Page description"}
        image={"https://i.imgur.com/4p8ebpS.jpeg"}
      />
    </div>
  );
}

export default index;
