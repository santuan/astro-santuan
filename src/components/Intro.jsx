import React from "react";

export default function IndexPage() {
  return (
    <>
      <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden text-center bg-gray-900 shadow-sm bg-pattern">
        <div className="relative z-50 w-full px-8 mx-auto mt-24 mb-2 text-left md:mt-8 max-w-7xl">
          <h2 className="w-full font-serif text-4xl text-left text-white md:text-6xl" style={{ opacity: ".8" }}>
            <div className="block w-full mt-2 font-bold">
              <a href="galeria" className="text-white hover:opacity-75 md:text-blue-400 md:hover:text-blue-500">
                Imágenes.
              </a>
            </div>
          </h2>
        </div>
      </div>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="opacity-80 md:opacity-100 object-cover w-full h-screen absolute top-0 left-0 object-right z-0 md:object-center"
        poster="https://res.cloudinary.com/srcouto/video/upload/c_scale,q_auto:eco,w_763/v1628508273/encoder/herohdsantuan0001-0250_wpgean.webp"
      >
        <source
          src="https://res.cloudinary.com/srcouto/video/upload/q_auto:eco/v1628057438/encoder/herohdsantuan0001-0250_wpgean.mp4"
          type="video/mp4"
        />
        <source
          src="https://res.cloudinary.com/srcouto/video/upload/q_auto:eco/v1628057438/encoder/herohdsantuan0001-0250_wpgean.webm"
          type="video/webm"
        />
        <source
          src="https://res.cloudinary.com/srcouto/video/upload/q_auto:low/v1628128970/encoder/herohdsantuan0001-0250_wpgean.ogv"
          type="video/ogg"
        />
      </video>
    </>
  );
}
