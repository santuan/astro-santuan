import lottie from "lottie-web";
import React, { useEffect } from "react";
import isoStn from "./iso-santuan.json";

const WelcomeStnCompoent = () => {
  useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#circulo-cuadrado-triangulo"),
      animationData: isoStn,
    });
  }, []);
  return (
    <>
      <a href="/" className="fixed top-0 left-0 ml-3 z-[999] flex justify-center" aria-label="STN - Volver al inicio">
        <div id="circulo-cuadrado-triangulo" style={{ width: 100, height: 60 }} />
      </a>
    </>
  );
};

export default WelcomeStnCompoent;
