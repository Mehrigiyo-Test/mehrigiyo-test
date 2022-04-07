import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import GlobalSponsorLogo1 from '../../images/globalSponsor1.png';
import GlobalSponsorLogo2 from '../../images/globalSponsor2.png';
import GlobalSponsorLogo3 from '../../images/globalSponsor3.png';
import GlobalSponsorLogo4 from '../../images/globalSponsor4.png';
import GlobalSponsorLogo5 from '../../images/globalSponsor5.png';
import GlobalSponsorLogo6 from '../../images/globalSponsor6.png';

import 'swiper/css/autoplay';
import './style.scss';

const Globlasponsors = () => {
    return (
        <div className='sponsors GlobalWrapper'>   
            <Swiper
                slidesPerView={5}
                spaceBetween={20}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
                autoplay={{delay: 2000}}
            >
                <SwiperSlide>
                    <img src={GlobalSponsorLogo1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={GlobalSponsorLogo2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={GlobalSponsorLogo3} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={GlobalSponsorLogo4} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={GlobalSponsorLogo5} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={GlobalSponsorLogo6} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={GlobalSponsorLogo1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={GlobalSponsorLogo2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={GlobalSponsorLogo3} alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default Globlasponsors;
