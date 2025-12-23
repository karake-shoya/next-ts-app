"use client";

import { useState } from "react";

export default function LikeButton() {
  const [likes, setLikes] = useState(0);

  return (
    <button
      onClick={() => setLikes(likes +1)}
      className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
    >
      いいね！ ({likes})
    </button>
  );
}