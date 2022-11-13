import React, { useState, useEffect, useCallback } from "react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { DotButton, PrevButton, NextButton } from "./EmblaCarouselButtons"

Autoplay.globalOptions = { delay: 10000 }

const EmblaCarousel = ({ hit }) => {
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
      <div className="overflow-hidden bg-gray-900 rounded-lg shadow-xl embla">
        <div className="embla__viewport" ref={viewportRef}>
          <div className=" embla__container">
            <div className="embla__slide ">
              <img
                title="Una demostración de Dall-E"
                alt="Una demostración de Dall-E"
                src="https://santuan.netlify.app/static/ac405f51e282c9d3833cce9f02445845/97763/DALL_E_2022-05-29_17.38.22_kcx7sw.webp"
              />
            </div>
            <div className="embla__slide ">
              <img
                title="Una demostración de Dall-E"
                alt="Una demostración de Dall-E"
                src="https://santuan.netlify.app/static/b1a3b5a84c8261878d7c1d844a97cfc7/97763/DALL_E_2022-05-29_17.38.13_kwe3bj.webp"
              />
            </div>
            <div className="embla__slide ">
              <img
                title="Una demostración de Dall-E"
                alt="Una demostración de Dall-E"
                src="https://santuan.netlify.app/static/e3a7a9006dff503ab32f8b5df929f15d/97763/DALL_E_2022-05-29_17.38.19_uzkkqn.webp"
              />
            </div>
            <div className="embla__slide ">
              <img
                title="Una demostración de Dall-E"
                alt="Una demostración de Dall-E"
                src="https://santuan.netlify.app/static/df485763fc6f43869f35ac0a8936e703/97763/DALL_E_2022-05-29_17.39.23_undjh0.webp"
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

export default EmblaCarousel
