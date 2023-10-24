import React, {useState, useEffect } from 'react'
import { ArrowRightIcon, ArrowLeftIcon, StopCircleIcon } from '@heroicons/react/24/outline'
import { banner1, banner2, banner3, weather } from '../../assets';
const Carousel = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const updateWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', updateWindowWidth);
    return () => {
      window.removeEventListener('resize', updateWindowWidth);
    };
  }, []);

  const slides = [
    {
      url: windowWidth < 768 ? weather : banner1,
    },
    {
      url: windowWidth < 768 ? weather : banner2,
    },
    {
      url: windowWidth < 768 ? weather : banner3,
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const [autoplay, setAutoplay] = useState(true);
  useEffect(() => {
    let interval;
    if (autoplay) {
      interval = setInterval(() => {
        nextSlide();
      }, 3000); // 3 seconds auto
    };
    return () => {
      clearInterval(interval);
    };
  }, [currentIndex, autoplay]);

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
     <div className='max-w-screen h-[780px] w-full mt-[101px]  relative group'>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-full h-full bg-center bg-local bg-cover duration-500'
      ></div>
      {/* Left Arrow */}
      <div className=' absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full  bg-black/20 text-white cursor-pointer'>
        <ArrowLeftIcon onClick={prevSlide} size={30} className='w-6 h-6' />
      </div>
      {/* Right Arrow */}
      <div className=' absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full bg-black/20 text-white cursor-pointer'>
        <ArrowRightIcon onClick={nextSlide} size={30}  className='w-6 h-6' />
      </div>
      {/* <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer'
          >
            <StopCircleIcon className='w-6 h-6' />
          </div>
        ))}
      </div> */}
    </div>
  );
}

export default Carousel