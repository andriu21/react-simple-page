import "./styles/Gallery.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Title_Subtitle } from "./Title_Subtitle.jsx";

import Gone from "../assets/G-1.jpg";
import Gtwo from "../assets/G-2.jpg";
import Gthree from "../assets/G-3.jpg";
import Gfour from "../assets/G-4.jpg";
import Gfive from "../assets/G-5.jpg";
import Gsix from "../assets/G-6.jpg";
import Gseve from "../assets/G-7.jpg";

import { Autoplay } from 'swiper/modules';
export const Gallery = () => {
  return (
    <>
      <section className="Gallery" id="Gallery">
        <Title_Subtitle title={"gallery"} subtitle={"campus photos"} />
        <div className="gallery_container">
          <Swiper
           slidesPerView={1}
            spaceBetween={0}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
             modules={[Autoplay]}
            breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 0,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 0,
                },
                1440: {
                    slidesPerView: 4,
                    spaceBetween: 0,
                  }
              }}
          >
            <SwiperSlide>
              <img src={Gone} alt="asdaasd" className="Gallery_img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Gtwo} alt="asdaasd" className="Gallery_img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Gthree} alt="asdaasd" className="Gallery_img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Gfour} alt="asdaasd" className="Gallery_img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Gfive} alt="asdaasd" className="Gallery_img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Gsix} alt="asdaasd" className="Gallery_img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Gseve} alt="asdaasd" className="Gallery_img" />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
};
