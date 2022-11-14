import React from "react";
import ReactCompareImage from "react-compare-image";
import Carousel01 from "@/components/Lab/LabDalle/Carousel/Carousel01.jsx";
import Carousel02 from "@/components/Lab/LabDalle/Carousel/Carousel02.jsx";
import Carousel03 from "@/components/Lab/LabDalle/Carousel/Carousel03.jsx";
import Carousel04 from "@/components/Lab/LabDalle/Carousel/Carousel04.jsx";
import MenuDropdownPages from "@/components/Lab/LabDalle/headlessui/MenuDropdownPages.jsx";
import CarouselTokenOne from "@/components/Lab/LabDalle/Carousel/EmblaCarouselDalleTokenOne.jsx";
import CarouselTokenThree from "@/components/Lab/LabDalle/Carousel/EmblaCarouselDalleTokenThree.jsx";
import CarouselTokenTwo from "@/components/Lab/LabDalle/Carousel/EmblaCarouselDalleTokenTwo.jsx";

const DallePage = () => {
  return (
    <div>
      <div
        id="intro"
        className="flex flex-col justify-end w-full min-h-screen mx-auto text-center text-white bg-indigo-900"
      >
        <div
          id="ejemplo2"
          className="relative grid w-full pb-12 mx-auto scroll-mt-10 bg-gray-900/50 bg-opacity-30 bg-gradient-to-b from-red-700 to-amber-600"
        >
          <div className="max-w-xl px-6 pt-12 mx-auto">
            <div className="flex flex-col items-center justify-center w-full px-3 pt-24 pb-12 font-serif text-3xl text-center ">
              <small className="w-24 px-2 py-1 mb-3 font-mono text-xs font-medium text-center uppercase rounded-md shadow bg-gray-900/20">
                Ejemplo 2
              </small>
              Subir imágenes de referencia y generar variaciones.
            </div>
          </div>
          <div className="grid max-w-lg gap-3 px-6 mx-auto lg:gap-12 xl:max-w-5xl xl:grid-cols-2">
            <div className="relative z-10">
              <div className="absolute top-0 right-0 z-10 flex items-center justify-center m-2">
                <p className="px-3 py-1 font-mono text-xs rounded-full bg-red-900/80">Original en Blender</p>
              </div>
              <div className="relative overflow-hidden shadow-2xl rounded-2xl">
                <img
                  as="div"
                  placeholder="blurred"
                  layout="constrained"
                  loading="lazy"
                  quality="90"
                  width={495}
                  height={495}
                  className="object-cover object-center w-full xl:h-[495px]"
                  title="3d render de Cuadrado blanco en cubos rojos"
                  alt="3d render de Cuadrado blanco en cubos rojos"
                  src="https://res.cloudinary.com/srcouto/image/upload/c_fill,h_495,q_80,w_495/v1654827280/santuan/tokens/14_bmzdy6_i7uuki.jpg"
                />
              </div>
            </div>
            <div className="relative z-10">
              <div className="absolute top-0 right-0 z-10 flex items-center justify-center m-2">
                <p className="px-3 py-1 font-mono text-xs rounded-full bg-red-900/80">Variaciones de Dall·E</p>
              </div>
              <CarouselTokenOne />
            </div>
            <div className="relative z-10">
              <div className="absolute top-0 right-0 z-10 flex items-center justify-center m-2">
                <p className="px-3 py-1 font-mono text-xs rounded-full bg-blue-900/80">Original en Blender</p>
              </div>
              <div className="relative overflow-hidden shadow-2xl rounded-2xl">
                <img
                  placeholder="blurred"
                  layout="constrained"
                  loading="lazy"
                  quality="90"
                  width={495}
                  height={495}
                  title="Render 3d - una luz blanca atravezando una pieza hueca y con agujeros sobre un fondo azul"
                  alt="Render 3d - una luz blanca atravezando una pieza hueca y con agujeros sobre un fondo azul"
                  className="object-cover object-center w-full xl:h-[495px]"
                  src="https://res.cloudinary.com/srcouto/image/upload/c_scale,h_650,q_auto:eco/v1654817028/santuan/tokens/untitled_i27pcx_evplpa.jpg"
                />
              </div>
            </div>
            <div className="relative z-10">
              <div className="absolute top-0 right-0 z-10 flex items-center justify-center m-2">
                <p className="px-3 py-1 font-mono text-xs rounded-full bg-blue-900/80">Variaciones de Dall·E</p>
              </div>
              <CarouselTokenTwo />
            </div>
            <div className="relative z-10">
              <div className="absolute top-0 right-0 z-10 flex items-center justify-center m-2">
                <p className="px-3 py-1 font-mono text-xs rounded-full bg-amber-900/80">Original en Blender</p>
              </div>
              <div className="relative overflow-hidden shadow-2xl rounded-2xl">
                <img
                  as="div"
                  placeholder="blurred"
                  layout="constrained"
                  loading="lazy"
                  quality="90"
                  width={495}
                  height={495}
                  alt="Render - un monumento observando a  un triangulo, un cuadrado y una esfera sobre un fondo blanco en un dia con nubes."
                  title="Render - un monumento observando a  un triangulo, un cuadrado y una esfera sobre un fondo blanco en un dia con nubes."
                  className="object-cover object-center w-full xl:h-[495px]"
                  src="https://res.cloudinary.com/srcouto/image/upload/c_scale,h_500,w_500/v1654817026/santuan/tokens/2_iutptm_j66y1p.jpg"
                />
              </div>
            </div>
            <div className="relative z-10">
              <div className="absolute top-0 right-0 z-10 flex items-center justify-center m-2">
                <p className="px-3 py-1 font-mono text-xs rounded-full bg-amber-900/80">Variaciones de Dall·E</p>
              </div>
              <CarouselTokenThree />
            </div>
          </div>
        </div>

        <div
          id="ejemplo3"
          className="relative grid w-full px-6 pb-64 mx-auto scroll-mt-10 bg-gray-900/50 bg-opacity-30 bg-gradient-to-b from-amber-600 via-amber-600 to-yellow-400"
        >
          <div className="max-w-xl px-6 pt-12 mx-auto">
            <div className="flex flex-col items-center justify-center w-full px-3 pt-24 pb-6 font-serif text-xl text-center md:text-3xl ">
              <small className="w-24 px-2 py-1 mb-3 font-mono text-xs font-medium text-center uppercase rounded-md shadow bg-gray-900/20">
                Ejemplo 3
              </small>
              Variaciones de una secuencia de palabras, multiples maneras de percibirlas.
            </div>
          </div>
          <div className="grid w-full max-w-6xl gap-3 mx-auto md:grid-cols-1 lg:grid-cols-2">
            <div className="relative grid grid-cols-2 gap-0 overflow-hidden duration-300 shadow-lg hover:ring-2 ring-0 hover:ring-offset-2 hover:ring-offset-yellow-700 ring-amber-700 rounded-2xl">
              <div className="flex flex-col items-center justify-center w-full p-5 text-gray-900 bg-amber-200/80">
                <p className="w-full font-serif text-lg font-bold text-left md:text-2xl ">
                  En un castillo flotando en el cielo.
                </p>
              </div>
              <Carousel01 />
            </div>
            <div className="relative grid grid-cols-2 gap-0 overflow-hidden duration-300 shadow-lg hover:ring-2 ring-0 hover:ring-offset-2 hover:ring-offset-yellow-700 ring-amber-700 rounded-2xl">
              <div className="flex flex-col items-center justify-center w-full p-5 text-gray-900 bg-amber-200/80">
                <p className="w-full font-serif text-lg font-bold text-left md:text-2xl ">Un rey conejo.</p>
              </div>
              <Carousel04 />
            </div>
            <div className="relative grid grid-cols-2 gap-0 overflow-hidden duration-300 shadow-lg hover:ring-2 ring-0 hover:ring-offset-2 hover:ring-offset-yellow-700 ring-amber-700 rounded-2xl">
              <div className="flex flex-col items-center justify-center w-full p-5 text-gray-900 bg-amber-200/80">
                <p className="w-full font-serif text-lg font-bold text-left md:text-2xl ">
                  Dos roedores disfrutaban una taza de té junto al fuego del hogar.
                </p>
              </div>
              <Carousel02 />
            </div>
            <div className="relative grid grid-cols-2 gap-0 overflow-hidden duration-300 shadow-lg hover:ring-2 ring-0 hover:ring-offset-2 hover:ring-offset-yellow-700 ring-amber-700 rounded-2xl">
              <div className="flex flex-col items-center justify-center w-full p-5 text-gray-900 bg-amber-200/80">
                <p className="w-full font-serif text-lg font-bold text-left md:text-2xl ">
                  Un conejo en paracaidas con una zanahoria.
                </p>
              </div>
              <Carousel03 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DallePage;

const Loading = () => {
  return (
    <div className="absolute inset-0 z-0 flex items-center justify-center select-none bg-black/20">
      <div className="w-16 h-16">
        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-white" viewBox="0 0 38 38">
          <g transform="translate(1 1)" strokeWidth="2" fill="none" fillRule="evenodd">
            <circle strokeOpacity=".5" cx="18" cy="18" r="18" />
            <path d="M36 18c0-9.94-8.06-18-18-18">
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 18 18"
                to="360 18 18"
                dur="1s"
                repeatCount="indefinite"
              />
            </path>
          </g>
        </svg>
      </div>
    </div>
  );
};
