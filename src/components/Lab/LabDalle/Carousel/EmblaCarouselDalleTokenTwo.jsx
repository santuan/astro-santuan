import React, { useState, useEffect, useCallback } from "react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { DotButton, PrevButton, NextButton } from "./EmblaCarouselButtons"

Autoplay.globalOptions = { delay: 10000 }

const EmblaCarouselDalleTokenTwo = ({ hit }) => {
  // const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [Autoplay()])
  const [viewportRef, embla] = useEmblaCarousel({ skipSnaps: false, loop: true }, [
    Autoplay(),
  ])
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState([])

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla])
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla])
  const scrollTo = useCallback(
    (index) => embla && embla.scrollTo(index),
    [embla]
  )

  const onSelect = useCallback(() => {
    if (!embla) return
    setSelectedIndex(embla.selectedScrollSnap())
    setPrevBtnEnabled(embla.canScrollPrev())
    setNextBtnEnabled(embla.canScrollNext())
  }, [embla, setSelectedIndex])

  useEffect(() => {
    if (!embla) return
    onSelect()
    setScrollSnaps(embla.scrollSnapList())
    embla.on("select", onSelect)
  }, [embla, setScrollSnaps, onSelect])
  return (
    <>
      <div className="overflow-hidden bg-gray-900 shadow-2xl rounded-2xl embla">
        <div className="embla__viewport" ref={viewportRef}>
          <div className=" embla__container">
            <div className="embla__slide ">
              <img
                as="div"
                placeholder="blurred"
                layout="constrained"
                loading="lazy"
                width={500}
                height={500}
                quality="90"
                title="Una demostración de Dall-E"
                alt="Una demostración de Dall-E"
                src="https://res.cloudinary.com/srcouto/image/upload/v1654060071/santuan/tokens/3/DALL_E_2022-05-29_10.21.58_iiejdg.png"
              />
            </div>
            <div className="embla__slide ">
              <img
                as="div"
                placeholder="blurred"
                layout="constrained"
                loading="lazy"
                width={500}
                height={500}
                quality="90"
                title="Una demostración de Dall-E"
                alt="Una demostración de Dall-E"
                src="https://res.cloudinary.com/srcouto/image/upload/v1654060036/santuan/tokens/3/DALL_E_2022-05-29_10.21.52_mv1nll.png"
              />
            </div>
            <div className="embla__slide ">
              <img
                as="div"
                placeholder="blurred"
                layout="constrained"
                loading="lazy"
                width={500}
                height={500}
                quality="90"
                title="Una demostración de Dall-E"
                alt="Una demostración de Dall-E"
                src="https://res.cloudinary.com/srcouto/image/upload/v1654060065/santuan/tokens/3/DALL_E_2022-05-29_10.22.11_ly3yfn.png"
              />
            </div>
            <div className="embla__slide ">
              <img
                as="div"
                placeholder="blurred"
                layout="constrained"
                loading="lazy"
                width={500}
                height={500}
                quality="90"
                title="Una demostración de Dall-E"
                alt="Una demostración de Dall-E"
                src="https://res.cloudinary.com/srcouto/image/upload/v1654060077/santuan/tokens/3/DALL_E_2022-05-29_10.22.06_y8xs3x.png"
              />
            </div>
            <div className="embla__slide ">
              <img
                as="div"
                placeholder="blurred"
                layout="constrained"
                loading="lazy"
                width={500}
                height={500}
                quality="90"
                title="Una demostración de Dall-E"
                alt="Una demostración de Dall-E"
                src="https://res.cloudinary.com/srcouto/image/upload/v1654060064/santuan/tokens/3/DALL_E_2022-05-29_10.21.27_dkjkao.png"
              />
            </div>
          </div>
        </div>
        <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
        <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              selected={index === selectedIndex}
              onClick={() => scrollTo(index)}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default EmblaCarouselDalleTokenTwo
