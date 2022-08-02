import "swiper/css";
import "./../style/slide.scss";
import "swiper/css/pagination";
import { useSelector } from "react-redux";
import { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import {
  faClock,
  faThumbsUp,
  faCommentDots,
} from "@fortawesome/free-regular-svg-icons";

const ajax = new XMLHttpRequest();
const PROFILE_URL = "https://api.hnpwa.com/v0/user/@username.json";

function Slide({ setUsername, setModal, getData, i }) {
  function saveName() {
    function getProfile() {
      ajax.open("GET", PROFILE_URL.replace("@username", getData.user), false);
      ajax.send();
      return JSON.parse(ajax.response);
    }
    setUsername(getProfile());
    setModal(true);
  }
  console.log(getData);

  return (
    <SwiperSlide>
      <div className="slideBg">
        <div className="slideItem">
          <div className="lank">{String(i + 1).padStart(2, "0")}</div>
          <div className="point">
            <span>
              <FontAwesomeIcon icon={faThumbsUp} />
            </span>
            <span>{getData.points}</span>
          </div>
          <div className="title">
            <a href={getData.url} target="_blank">
              {getData.title}
            </a>
          </div>

          <div className="user">
            <span onClick={saveName}>
              <FontAwesomeIcon icon={faUser} />
              {getData.user}
            </span>
          </div>
        </div>
      </div>
    </SwiperSlide>
  );
}

export default Slide;
