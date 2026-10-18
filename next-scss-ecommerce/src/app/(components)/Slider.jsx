'use client';

import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import Autoplay from 'embla-carousel-autoplay';
import slide1 from '../assets/images/slide1.jpg';
import slide2 from '../assets/images/slide2.jpg';
import slide3 from '../assets/images/slide3.jpg';

const Slider = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide">
          <Image src={slide1} alt="Campaign slide 1" priority />
        </div>
        <div className="embla__slide">
          <Image src={slide2} alt="Campaign slide 2" />
        </div>
        <div className="embla__slide">
          <Image src={slide3} alt="Campaign slide 3" />
        </div>
      </div>
    </div>
  );
};

export default Slider;
