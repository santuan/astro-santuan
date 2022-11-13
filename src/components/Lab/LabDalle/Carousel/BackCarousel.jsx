import React from "react"
import makeCarousel from "react-reveal/makeCarousel"
import Fade from "react-reveal/Fade"
export default function BackgroundSlider(props) {
  const CarouselUI = ({ position, total, handleClick, children }) => (
    <div className="relative w-full h-full mb-0 overflow-hidden border-b-2 border-red-600">
      <div>
        <div>{children}</div>
      </div>
    </div>
  )
  const Carousel = makeCarousel(CarouselUI)
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center py-32 overflow-hidden text-center text-white bg-gray-900 opacity-70 md:opacity-40 ">
      <div className="absolute inset-0 min-h-screen">
        <Carousel
          defaultWait={4000}
          maxTurns={99} /*wait for 1000 milliseconds*/
        >
          <Fade>
            <img
              className="object-fill w-full min-h-screen"
              layout="fullWidth"
              as="div"
              placeholder="blurred"
              loading="eager"
              quality="60"
              title="Render - Un oceano repleto de barquitos bajo una constelación de galaxias"
              alt="Render - Un oceano repleto de barquitos bajo una constelación de galaxias"
              src="https://res.cloudinary.com/srcouto/image/upload/q_auto:eco/v1654747810/santuan/history/01_19_jh8ikd.jpg"
            />
          </Fade>
          <Fade>
            <img
              className="object-fill object-left-top w-full min-h-screen"
              layout="fullWidth"
              as="div"
              placeholder="blurred"
              loading="eager"
              quality="60"
              title="Un conejo escuchando la radio - arte digital "
              alt="Un conejo escuchando la radio - arte digital "
              src="https://res.cloudinary.com/srcouto/image/upload/q_auto:eco/v1654747651/santuan/history/01_4_fitcxc.png"
            />
          </Fade>
          <Fade>
            <img
              className="object-fill w-full min-h-screen"
              layout="fullWidth"
              as="div"
              placeholder="blurred"
              loading="eager"
              quality="60"
              title="Una guitarra con una planta creciendo en su interior"
              alt="Una guitarra con una planta creciendo en su interior"
              src="https://res.cloudinary.com/srcouto/image/upload/c_scale,h_1024,q_auto:eco/v1654748288/santuan/history/01_75_giaebn.jpg"
            />
          </Fade>
          <Fade>
            <img
              className="object-fill w-full min-h-screen"
              layout="fullWidth"
              as="div"
              placeholder="blurred"
              loading="eager"
              quality="60"
              title="Arte digital de una habitacion con una ventana gigante"
              alt="Arte digital de una habitacion con una ventana gigante"
              src="https://res.cloudinary.com/srcouto/image/upload/v1654747878/santuan/history/ImageSequence030_wupe68.png"
            />
          </Fade>
          <Fade>
            <img
              className="object-fill w-full min-h-screen"
              layout="fullWidth"
              as="div"
              placeholder="blurred"
              loading="eager"
              quality="60"
              title="Arte digital de una niña sobre una casa en el arbol."
              alt="Arte digital de una niña sobre una casa en el arbol."
              src="https://res.cloudinary.com/srcouto/image/upload/q_auto:eco/v1654747800/santuan/history/ImageSequence032_mkwbse.jpg"
            />
          </Fade>
        </Carousel >
      </div >
    </div >
  )
}
