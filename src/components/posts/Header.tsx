import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export default function PostHeader() {
  const navigate = useNavigate();

  return (
    <div className="post__header">
      <button
        type="button"
        onClick={() => {
          navigate(-1);
        }}
      >
        <IoIosArrowBack size={24} />
      </button>
    </div>
  );
}
