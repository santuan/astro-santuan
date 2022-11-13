import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { DotButton, PrevButton, NextButton } from "./EmblaCarouselButtons";

Autoplay.globalOptions = { delay: 50000 };

const Carousel01 = ({ hit }) => {
  // const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [Autoplay()])
  const [viewportRef, embla] = useEmblaCarousel({ skipSnaps: false, loop: true }, []);
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const scrollTo = useCallback((index) => embla && embla.scrollTo(index), [embla]);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla, setSelectedIndex]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    setScrollSnaps(embla.scrollSnapList());
    embla.on("select", onSelect);
  }, [embla, setScrollSnaps, onSelect]);
  return (
    <>
      <div className="overflow-hidden bg-gray-900 embla">
        <div className="embla__viewport" ref={viewportRef}>
          <div className=" embla__container">
            <div className="embla__slide ">
              <img
                loading="lazy"
                width={440}
                height={440}
                title="Una demostración de Dall-E"
                alt="Una demostración de Dall-E"
                src="https://res.cloudinary.com/srcouto/image/upload/c_scale,q_auto:eco,w_440/v1654748309/santuan/history/01_51_kw7pv0.png"
              />
            </div>
            <div className="embla__slide ">
              <img
                loading="lazy"
                width={440}
                height={440}
                title="Una demostración de Dall-E"
                alt="Una demostración de Dall-E"
                src="https://res.cloudinary.com/srcouto/image/upload/c_scale,q_auto:eco,w_440/v1654748308/santuan/history/01_42_jw4b0n.png"
              />
            </div>
            <div className="embla__slide ">
              <img
                loading="lazy"
                width={440}
                height={440}
                title="Una demostración de Dall-E"
                alt="Una demostración de Dall-E"
                src="https://res.cloudinary.com/srcouto/image/upload/c_scale,q_auto:eco,w_440/v1654748281/santuan/history/01_46_ji4n2k.png"
              />
            </div>
            <div className="embla__slide ">
              <img
                loading="lazy"
                width={440}
                height={440}
                title="Una demostración de Dall-E"
                alt="Una demostración de Dall-E"
                src="https://res.cloudinary.com/srcouto/image/upload/c_scale,q_auto:eco,w_440/v1654748270/santuan/history/01_43_reejtr.png"
              />
            </div>
            <div className="embla__slide ">
              <img
                loading="lazy"
                width={440}
                height={440}
                title="Una demostración de Dall-E"
                alt="Una demostración de Dall-E"
                src="https://res.cloudinary.com/srcouto/image/upload/c_scale,q_auto:eco,w_440/v1654747866/santuan/history/01_49_blcwpq.png"
              />
            </div>
          </div>
        </div>
        <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
        <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
        <div className="!hidden embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton key={index} selected={index === selectedIndex} onClick={() => scrollTo(index)} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Carousel01;
