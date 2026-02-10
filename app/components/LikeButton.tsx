"use client";

import { useState } from "react";

export default function LikeButton() {
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 300);

    if (isLiked) {
      setLikes(likes - 1);
      setIsLiked(false);
    } else {
      setLikes(likes + 1);
      setIsLiked(true);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`
        relative group rounded-full border border-border/70 px-5 py-2 text-sm font-medium
        transition-all duration-300
        ${isLiked
          ? "border-transparent bg-accent-primary text-white shadow-md shadow-accent-primary/30"
          : "bg-card-bg text-foreground"
        }
        ${isAnimating ? "scale-110" : "scale-100"}
        hover:scale-105 active:scale-95
      `}
    >
      {/* Sparkle effects when liked */}
      {isLiked && (
        <>
          <span className="absolute top-1 left-2 w-1 h-1 bg-white rounded-full animate-ping" style={{ animationDuration: '1s' }} />
          <span className="absolute top-3 right-3 w-1.5 h-1.5 bg-white rounded-full animate-ping" style={{ animationDuration: '1.5s' }} />
          <span className="absolute bottom-2 left-4 w-1 h-1 bg-white rounded-full animate-ping" style={{ animationDuration: '2s' }} />
        </>
      )}
      
      <span className="relative flex items-center gap-2">
        <span 
          className={`
            text-lg transition-transform duration-300
            ${isAnimating ? "scale-150" : "scale-100"}
          `}
        >
          {isLiked ? "❤️" : "🤍"}
        </span>
        <span>{isLiked ? "Thanks!" : "Like"}</span>
        <span 
          className={`
            ml-1 px-2 py-0.5 rounded-full text-xs
            ${isLiked 
              ? "bg-white/20 text-white" 
              : "bg-accent-primary/10 text-accent-primary"
            }
          `}
        >
          {likes}
        </span>
      </span>
    </button>
  );
}
