import React, { useState } from "react";
import Card from "./Card";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
function Testimonials(props) {
  let reviews = props.reviews;
  const [index, setindex] = useState(0);

  function leftshifthandler() {
    if (index - 1 < 0) {
      setindex(reviews.length - 1);
    } else {
      setindex(index - 1);
    }
  }

  function rightshifthandler() {
    if (index + 1 >= reviews.length) {
      setindex(0);
    } else {
      setindex(index + 1);
    }
  }

  function surprisehandler() {
    let random = Math.floor(Math.random() * reviews.length);
    setindex(random);
  }

  return (
    <div className="w-[60vw] md:[700px] bg-white flex flex-col justify-center items-center mt-10 p-10 transition-all duration-700 hover:shadow-xl">
      <Card review={reviews[index]} />

      <div className="flex text-3xl mt-5 gap-3 text-violet-400 font-bold mx-auto">
        <button
          className="coursor-pointer hover:text-violet-500"
          onClick={leftshifthandler}
        >
          <FiChevronLeft />
        </button>
        <button
          className="coursor-pointer hover:text-violet-500"
          onClick={rightshifthandler}
        >
          <FiChevronRight />
        </button>
      </div>

      <div className="mt-6">
        <button
          className="bg-violet-400 hover:bg-violet-500 tranisition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg"
          onClick={surprisehandler}
        >
          Surprise me
        </button>
      </div>
    </div>
  );
}

export default Testimonials;
