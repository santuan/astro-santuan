import React from "react";
import "react-slideshow-image/dist/styles.css";
import { Fade } from "react-slideshow-image";

const fadeImages = [
  {
    url: "https://santuan.netlify.app/static/ac405f51e282c9d3833cce9f02445845/97763/DALL_E_2022-05-29_17.38.22_kcx7sw.webp",
    caption: "First Slide",
  },
  {
    url: "https://santuan.netlify.app/static/b1a3b5a84c8261878d7c1d844a97cfc7/97763/DALL_E_2022-05-29_17.38.13_kwe3bj.webp",
    caption: "Second Slide",
  },
  {
    url: "https://santuan.netlify.app/static/e3a7a9006dff503ab32f8b5df929f15d/97763/DALL_E_2022-05-29_17.38.19_uzkkqn.webp",
    caption: "Third Slide",
  },
  {
    url: "https://santuan.netlify.app/static/df485763fc6f43869f35ac0a8936e703/97763/DALL_E_2022-05-29_17.39.23_undjh0.webp",
    caption: "Fourth Slide",
  },
];

export default function Slideshow(props) {
  return (
    <div className=" flex flex-col items-center justify-center w-[320px] h-[320px] mx-auto sm:w-[500px] sm:h-[500px] overflow-hidden text-center text-white bg-gray-900 ">
      <div className="slide-container absolute inset-0 z-50">
        <Fade
          nextArrow={
            <button
              style={{
                background: "none",
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
              style={{
                background: "none",
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
          indicators={true}
          transitionDuration={600}
          autoplay={true}
          infinite={true}
        >
          {fadeImages.map((fadeImage, index) => (
            <img
              src={fadeImage.url}
              className="w-full"
              alt={fadeImage.caption}
              key={index}
            />
          ))}
        </Fade>
      </div>
    </div>
  );
}
