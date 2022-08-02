import { useSelector } from "react-redux";
import { Profile } from "./../components/Profile.js";
import { useState, useEffect } from "react";
import Item from "../components/Item.js";
import Banner from "./../components/Banner.js";
import Slide from "./../components/Slide.js";
import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

function Home() {
  const getData = useSelector((state) => state.news);
  const [item, setItem] = useState(getData);
  const [itemList, setItemList] = useState(10);
  const [username, setUsername] = useState("");
  const [modal, setModal] = useState(false);
  const pathname = window.location.pathname;
  const itemLen = itemList;
  const windowWidth = window.innerWidth;
  const [slideLength, setSlideLength] = useState(4);

  useEffect(() => {
    let copy = [...item];
    setItem(
      copy
        .sort(function (a, b) {
          if (a.points >= 1) {
            return a.points - b.points;
          }
        })
        .reverse()
        .filter((v) => v.points !== null)
    );
  }, []);

  useEffect(() => {
    if (windowWidth < 1024) {
      setSlideLength(2);
    }
  }, [windowWidth]);

  return (
    <>
      <Banner></Banner>
      <div className="inner">
        <div className="topWrap">
          <h2>Most Liked Top 8</h2>
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={0}
            slidesPerView={slideLength}
            loop={true}
            centeredSlides={true}
            slideToClickedSlide={true}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            //   onSlideChange={() => setWindowWidth(window.innerWidth)}
            //   onSwiper={(swiper) => console.log(swiper)}
          >
            {item.slice(0, 8).map((a, i) => {
              return (
                <SwiperSlide key={a.id}>
                  <Slide
                    setUsername={setUsername}
                    setModal={setModal}
                    getData={a}
                    i={i}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className="news cardWrap">
          <h2>
            Top feeds
            <br /> currently popular
          </h2>
          <div className="itemWrap">
            {getData.map((a, i) => {
              return (
                <Item
                  getData={a}
                  num={i}
                  key={a.id}
                  setUsername={setUsername}
                  setModal={setModal}
                  path={pathname}
                  itemLen={itemLen}
                  setItemList={setItemList}
                />
              );
            })}
          </div>
        </div>
      </div>
      {modal === true ? (
        <Profile username={username} setModal={setModal} />
      ) : null}
    </>
  );
}

export default Home;
