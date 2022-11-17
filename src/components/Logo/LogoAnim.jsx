import lottie from "lottie-web";
import React, { useEffect } from "react";
import isoStn from "./iso-santuan.json";
import LogoSvg from "./Logo.jsx";

const WelcomeStnCompoent = () => {
  useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#circulo-cuadrado-triangulo"),
      animationData: isoStn,
    });
  }, []);
  return (
    <>
      <a href="/" rel="prefetch" className="logo fixed top-2 left-0 ml-3 z-[999] flex justify-center" aria-label="STN - Volver al inicio">
        <div id="circulo-cuadrado-triangulo" style={{ width: 120, height: 50 }} />
        <LogoSvg />
      </a>
    </>
  );
};

export default WelcomeStnCompoent;
