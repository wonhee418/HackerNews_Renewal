import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import {
  faClock,
  faThumbsUp,
  faCommentDots,
} from "@fortawesome/free-regular-svg-icons";
import { useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const ajax = new XMLHttpRequest();
const PROFILE_URL = "https://api.hnpwa.com/v0/user/@username.json";

function Item({
  getData,
  setUsername,
  setModal,
  path,
  num,
  itemLen,
  setItemList,
}) {
  const navigate = useNavigate();
  const ASK = getData.title.indexOf("Ask HN:");
  const Tell = getData.title.indexOf("Tell HN:");
  const number = String(num + 1).padStart(3, "0");
  const [ref, inView] = useInView({
    // 라이브러리 옵션
    threshold: 0,
    triggerOnce: true,
  });

  function saveName() {
    function getProfile() {
      ajax.open("GET", PROFILE_URL.replace("@username", getData.user), false);
      ajax.send();
      return JSON.parse(ajax.response);
    }
    setUsername(getProfile());
    setModal(true);
  }

  useEffect(() => {
    if (inView === true) {
      setItemList(itemLen + 10);
    }
  }, [inView]);

  return (
    <>
      {itemLen === num + 1 ? (
        <div className="item" ref={ref}>
          <div className="profile">
            <span>
              asdasd
              {path === "/HackerNews_Renewal/job" ? null : (
                <FontAwesomeIcon icon={faUser} />
              )}
              {path === "/HackerNews_Renewal/job" ? null : (
                <span onClick={saveName}>{getData.user}</span>
              )}
            </span>
            <span className="number">{number}</span>
          </div>
          <div className="tit">
            <a
              href={
                ASK >= 0 || Tell >= 0
                  ? `/detail/#${getData.id}`
                  : getData.url
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
              {path === "/job" ? null : (
                <FontAwesomeIcon icon={faThumbsUp} />
              )}
              {path === "/job" ? null : `${getData.points}`}
            </span>
            <span
              className="reple"
              onClick={() => {
                navigate(`/detail${path}/#${getData.id}`);
              }}
            >
              {path === "/job" ? null : (
                <FontAwesomeIcon icon={faCommentDots} />
              )}
              {path === "/job"
                ? null
                : `${getData.comments_count}`}
            </span>
          </div>
        </div>
      ) : (
        <div className="item">
          <div className="profile">
            <span>
              {path === "/job" ? null : (
                <FontAwesomeIcon icon={faUser} />
              )}
              {path === "/job" ? null : (
                <span onClick={saveName}>{getData.user}</span>
              )}
            </span>
            <span className="number">{number}</span>
          </div>
          <div className="tit">
            <a
              href={
                ASK >= 0 || Tell >= 0
                  ? `/detail/#${getData.id}`
                  : getData.url
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
              {path === "/job" ? null : (
                <FontAwesomeIcon icon={faThumbsUp} />
              )}
              {path === "/job" ? null : `${getData.points}`}
            </span>
            <span
              className="reple"
              onClick={() => {
                navigate(`/detail${path}/#${getData.id}`);
              }}
            >
              {path === "/job" ? null : (
                <FontAwesomeIcon icon={faCommentDots} />
              )}
              {path === "/job"
                ? null
                : `${getData.comments_count}`}
            </span>
          </div>
        </div>
      )}
    </>
  );
}

export default Item;
