import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import {
  faClock,
  faThumbsUp,
  faCommentDots,
} from "@fortawesome/free-regular-svg-icons";
import { useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

const ajax = new XMLHttpRequest();
const PROFILE_URL = "https://api.hnpwa.com/v0/user/@username.json";

function Item({
  getData,
  setUsername,
  setModal,
  path,
  num,
  itemLen,
  scroll,
  setScroll,
}) {
  let navigate = useNavigate();
  let ASK = getData.title.indexOf("Ask HN:");
  let Tell = getData.title.indexOf("Tell HN:");
  let number = String(num + 1).padStart(3, "0");

  function saveName() {
    function getProfile() {
      ajax.open("GET", PROFILE_URL.replace("@username", getData.user), false);
      ajax.send();
      return JSON.parse(ajax.response);
    }
    setUsername(getProfile());
    setModal(true);
  }

  return (
    <>
      <div className="item">
        <div className="profile">
          <span>
            {path == "/HackerNews_Renewal/job" ? null : (
              <FontAwesomeIcon icon={faUser} />
            )}
            {path == "/HackerNews_Renewal/job" ? null : (
              <span onClick={saveName}>{getData.user}</span>
            )}
          </span>
          <span className="number">{number}</span>
        </div>
        <div className="tit">
          <a
            href={
              ASK >= 0 || Tell >= 0 ? `/detail/#${getData.id}` : getData.url
            }
            target={ASK >= 0 || Tell >= 0 ? "_self" : "_blank"}
          >
            {getData.title}
          </a>
        </div>
        <div className="statusBox">
          <span className="time">
            <FontAwesomeIcon icon={faClock} />
            {getData.time_ago}
          </span>
          <span className="like">
            {path == "/HackerNews_Renewal/job" ? null : (
              <FontAwesomeIcon icon={faThumbsUp} />
            )}
            {path == "/HackerNews_Renewal/job" ? null : `${getData.points}`}
          </span>
          <span
            className="reple"
            onClick={() => {
              navigate(`/detail${path}/#${getData.id}`);
            }}
          >
            {path == "/HackerNews_Renewal/job" ? null : (
              <FontAwesomeIcon icon={faCommentDots} />
            )}
            {path == "/HackerNews_Renewal/job"
              ? null
              : `${getData.comments_count}`}
          </span>
        </div>
      </div>
    </>
  );
}

export default Item;
