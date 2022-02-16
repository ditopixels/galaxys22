import React, { FC } from 'react';
import { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Slide from './Slide';


const Carousel:FC = ({children}) => {
    return (
        <Swiper
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={0}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
        >
            {React.Children.map(children,(child, i)=>(
                <SwiperSlide key={i}>
                    <Slide>
                        {child}
                    </Slide>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Carousel;
