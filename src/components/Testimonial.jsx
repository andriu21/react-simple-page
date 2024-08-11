import "./styles/Testimonial.css";
import { Title_Subtitle } from "./Title_Subtitle";
import TOne from "../assets/testimonial-1.jpg";
import TTwo from "../assets/testimonial-2.jpg";
import TThree from "../assets/testimonial-3.jpg";
import TFour from "../assets/testimonial-4.jpg";

import { TestimonialCard } from "./TestimonialCard.jsx";

import { Autoplay ,Navigation} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/navigation';



export const Testimonial = () => {
  return (
    <>
      <section className="Testimonials" id="Testimonials">
        <Title_Subtitle title={"testimonials"} subtitle={"What student Says"} />
        <div className="Testimonial_container">
          <Swiper
            slidesPerView={1}
            spaceBetween={0}
            navigation={true}
            loop={true}
            autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
            modules={[Autoplay,Navigation]}
            breakpoints={{
              1400: {
                slidesPerView: 2,
                spaceBetween: 0,
              },
            }}
          >
            <SwiperSlide>
              <TestimonialCard
                img={TOne}
                name={"girl one"}
                workstation={"dev, Boston"}
                testimonial={`At [University Name], I found a nurturing environment that fostered my academic and personal growth. The faculty's dedication and diverse opportunities provided me with the skills and confidence to excel in my career.`}
              />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialCard
                img={TTwo}
                name={"girl one"}
                workstation={"dev, Boston"}
                testimonial={`At [University Name], I found a nurturing environment that fostered my academic and personal growth. The faculty's dedication and diverse opportunities provided me with the skills and confidence to excel in my career.`}
              />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialCard
                img={TThree}
                name={"girl one"}
                workstation={"dev, Boston"}
                testimonial={`At [University Name], I found a nurturing environment that fostered my academic and personal growth. The faculty's dedication and diverse opportunities provided me with the skills and confidence to excel in my career.`}
              />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialCard
                img={TFour}
                name={"girl one"}
                workstation={"dev, Boston"}
                testimonial={`At [University Name], I found a nurturing environment that fostered my academic and personal growth. The faculty's dedication and diverse opportunities provided me with the skills and confidence to excel in my career.`}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
};
