import React from "react";
import { Fade } from "react-slideshow-image";

const fadeImages = [
  {
    url: "https://res.cloudinary.com/srcouto/image/upload/q_auto:eco/v1654747810/santuan/history/01_19_jh8ikd.webp",
    caption: "First Slide",
  },
  {
    url: "https://res.cloudinary.com/srcouto/image/upload/q_auto:eco/v1654747651/santuan/history/01_4_fitcxc.png",
    caption: "Second Slide",
  },
  {
    url: "https://res.cloudinary.com/srcouto/image/upload/c_scale,h_1024,q_auto:eco/v1654748288/santuan/history/01_75_giaebn.webp",
    caption: "Third Slide",
  },
  {
    url: "https://res.cloudinary.com/srcouto/image/upload/v1654747878/santuan/history/ImageSequence030_wupe68.png",
    caption: "Fourth Slide",
  },
  {
    url: "https://res.cloudinary.com/srcouto/image/upload/q_auto:eco/v1654747800/santuan/history/ImageSequence032_mkwbse.webp",
    caption: "fifth Slide",
  },
];

export default function Slideshow(props) {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center py-32 overflow-hidden text-center text-white bg-gray-900 opacity-50 ">
      <div className="slide-container absolute inset-0 z-50">
        <Fade autoplay={true}>
          {fadeImages.map((fadeImage, index) => (
            <img src={fadeImage.url} className="w-full" alt={fadeImage.caption} key={index} />
          ))}
        </Fade>
      </div>
    </div>
  );
}
