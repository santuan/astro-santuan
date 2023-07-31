import React from "react";

import { Fade } from "react-slideshow-image";

export default function Slideshow({ fadeImages }) {
  return (
    <div className="slide-container absolute inset-0 z-50">
      <Fade
        nextArrow={
          <button
            className="bg-gray-800/30 backdrop-blur-md rounded-xl !right-2"
            style={{
              border: "0px",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              className="w-12 h-12"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M8.7 17.3q-.275-.275-.275-.7q0-.425.275-.7l3.9-3.9l-3.9-3.9q-.275-.275-.275-.7q0-.425.275-.7q.275-.275.7-.275q.425 0 .7.275l4.6 4.6q.15.15.213.325q.062.175.062.375t-.062.375q-.063.175-.213.325l-4.6 4.6q-.275.275-.7.275q-.425 0-.7-.275Z"
              />
            </svg>
          </button>
        }
        prevArrow={
          <button
            className="bg-gray-800/30 backdrop-blur-md rounded-xl !left-2"
            style={{
              border: "0px",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              className="w-12 h-12"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M15.41 7.41L14 6l-6 6l6 6l1.41-1.41L10.83 12l4.58-4.59z"
              />
            </svg>
          </button>
        }
        indicators
        transitionDuration={600}
        autoplay
        infinite
      >
        {fadeImages.map((fadeImage) => (
          <img
            src={fadeImage}
            className="aspect-square object-cover object-center"
            alt="Imagen"
            key={fadeImage}
          />
        ))}
      </Fade>
    </div>
  );
}
