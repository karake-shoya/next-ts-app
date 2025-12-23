"use client";

import { useState } from "react";

export default function LikeButton() {
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const handleClick = () => {
    if (isLiked) {
      setLikes(likes - 1);
      setIsLiked(false);
    } else {
      setLikes(likes + 1);
      setIsLiked(true);
    }
  }
  return (
    <button
      onClick={handleClick}
      className={`px-4 py-2 rounded-md mt-4 text-white font-medium transition-colors duration-200 ${
        isLiked
          ? "bg-pink-500 hover:bg-pink-600"
          : "bg-blue-500 hover:bg-blue-600"
      }`}
    >
      {isLiked ? "❤️ Thanks!" : "♡ Like"} ({likes})
    </button>
  );
}