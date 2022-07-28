// import {Swiper, SwiperSlide} from 'swiper/react'
// import 'swiper/css'
import BanImg from './../img/banner.png'
import './../style/banner.scss'



function Banner (){
  return(

    <div className='Banner'>
      <img src={BanImg}></img>
    </div>
    // <Swiper
    //   spaceBetween={0}
    //   slidesPerView={1}
    //   onSlideChange={() => console.log('slide change')}
    //   onSwiper={(swiper) => console.log(swiper)}
    // >
    //   <SwiperSlide></SwiperSlide>
    //   <SwiperSlide><img src={BanImg}></img></SwiperSlide>
    //   <SwiperSlide><img src={BanImg}></img></SwiperSlide>
    // </Swiper>

  )
}

export default Banner;