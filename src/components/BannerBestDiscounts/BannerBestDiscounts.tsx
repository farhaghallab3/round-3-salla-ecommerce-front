import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import type { EmblaCarouselType } from "embla-carousel"
import { Button } from "@/components/ui/button"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { Link } from "react-router-dom"

export function BannerBestDiscounts() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  )

  const [api, setApi] = React.useState<EmblaCarouselType | undefined>(undefined)
  const [selectedIndex, setSelectedIndex] = React.useState(0)
  const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([])

  const slides = [
    {
      id:1,
      title: "أفضل التخفيضات 2022",
      description: "متجر سلة يوفر لك كل ماتحتاجه من إلكترونيات أو أثاث منزلي بالإضافة إلى أفضل التحفيضات على المنتجات , تسوق الان واستمتع بكل بالتخفيضات على المنتجات",
      button:"اكتشف المزيد"
    },
    {
        id:2,
        title: "أفضل التخفيضات 2022",
        description: "متجر سلة يوفر لك كل ماتحتاجه من إلكترونيات أو أثاث منزلي بالإضافة إلى أفضل التحفيضات على المنتجات , تسوق الان واستمتع بكل بالتخفيضات على المنتجات",
        button:"اكتشف المزيد"

    },
    {
        id:3,
        title: "أفضل التخفيضات 2022",
        description: "متجر سلة يوفر لك كل ماتحتاجه من إلكترونيات أو أثاث منزلي بالإضافة إلى أفضل التحفيضات على المنتجات , تسوق الان واستمتع بكل بالتخفيضات على المنتجات",
        button:"اكتشف المزيد"

    },
  ]

  React.useEffect(() => {
    if (!api) return

    setScrollSnaps(api.scrollSnapList())
    const onSelect = () => {
      setSelectedIndex(api.selectedScrollSnap())
    }

    api.on("select", onSelect)
    onSelect()

    return () => {
      api.off("select", onSelect)
    }
  }, [api])

  return (
    <div className="w-full md:w-1/3  mx-auto flex flex-col items-center bg-transparent">
      <Carousel
        plugins={[plugin.current]}
        setApi={setApi}
        className="w-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {slides.map((slide) => (
            <CarouselItem key={slide.id}>
              <div
                className="w-full h-64 bg-cover bg-center rounded-xl relative text-surface-primary flex items-center justify-center"
                >
                <div className="absolute inset-0 bg-bg-transparent rounded-xl"></div>
                <div className="relative z-10 text-center p-4">
                  <h2 className=" font-extrabold text-3xl mb-2">{slide.title}</h2>
                  <p className="text-sm py-lg">{slide.description}</p>
                  <Link to={"/"}>
                    <Button className="tansition bg-accent-primary px-5xl py-lg text-surface-primary rounded-md
                hover:text-accent-primary border-accent-primary hover:bg-transparent hover:border hover:border-accent-primary-active
                    ">{slide.button}</Button>
                  </Link>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Pagination Dots */}
      <div className="mt-xl flex gap-2 ">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              selectedIndex === index ? "bg-button-primary px-md" : "bg-transparent border border-white"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
