import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {EffectFade, Navigation} from 'swiper';

SwiperCore.use([EffectFade, Navigation]);

const PageIntro = () => {

  return (
    <section className="page-intro">  
      <Swiper navigation effect="fade" className="swiper-wrapper">
        <SwiperSlide>
          <div className="page-intro__slide" style={{ backgroundImage: "url('/images/slide-1.jpg')" }}>
            <div className="container">
              <div className="page-intro__slide__content">
                <h2>10% Instant Discount</h2>
              
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="page-intro__slide" style={{ backgroundImage: "url('/images/slide-2.jpg')" }}>
            <div className="container">
              <div className="page-intro__slide__content">
                <h2>Min. 50% Off</h2>
              
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

    
    </section>
  )
};

export default PageIntro