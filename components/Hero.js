import React from 'react';
import HeroItem from './HeroItem';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Hero = ({ results }) => {
  console.log(results);
  return (
    <div className=" -mt-16">
      <Swiper slidesPerView={1}>
        {results.map((result) => {
          return (
            <>
              <SwiperSlide>
                <HeroItem result={result} key={result.key} />
              </SwiperSlide>
            </>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Hero;
