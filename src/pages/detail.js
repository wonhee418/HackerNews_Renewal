import "./../style/detail.scss";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Profile } from "./../components/Profile.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faThumbsUp,
  faLink,
  faShare,
} from "@fortawesome/free-solid-svg-icons";
import { faClock, faCommentDots } from "@fortawesome/free-regular-svg-icons";

const ajax = new XMLHttpRequest();
const CONTENT_URL = "https://api.hnpwa.com/v0/item/@id.json";
const PROFILE_URL = "https://api.hnpwa.com/v0/user/@username.json";

function contentData() {
  const CONTENT_ID = window.location.hash.substring(1);
  ajax.open("GET", CONTENT_URL.replace("@id", CONTENT_ID), false);
  ajax.send();
  return JSON.parse(ajax.response);
}

function Detail() {
  let [content, setContent] = useState(contentData());
  let [comment, setComment] = useState(content.comments);
  let [username, setUsername] = useState("");
  let [modal, setModal] = useState(false);
  let commentLen = content.comments_count;
  let Ask = content.title.indexOf("Ask HN:");
  let Tell = content.title.indexOf("Tell HN:");
  //   let arr = new Array(content.comments_count);

  function saveName() {
    function getProfile() {
      ajax.open("GET", PROFILE_URL.replace("@username", content.user), false);
      ajax.send();
      return JSON.parse(ajax.response);
    }
    setUsername(getProfile());
    setModal(true);
  }

  return (
    <>
      <div className="inner">
        <div className="content">
          <div className="info">
            <span onClick={saveName}>
              <FontAwesomeIcon icon={faUser} />
              {content.user}
            </span>
            <span>
              <FontAwesomeIcon icon={faClock} />
              {content.time_ago}
            </span>
            <span>
              <FontAwesomeIcon icon={faThumbsUp} />
              {content.points}
            </span>
          </div>
          <div className="tit">
            <p>{content.title}</p>
            <span>
              <a href={content.url} target="_blank">
                {Ask >= 0 || Tell >= 0 ? null : (
                  <FontAwesomeIcon icon={faLink} />
                )}
                {Ask >= 0 || Tell >= 0 ? null : content.url}
              </a>
            </span>
          </div>
          <div
            className="desc"
            dangerouslySetInnerHTML={{ __html: `${content.content}` }}
          ></div>
        </div>
        <div className="commentBox">
          <div className="commentNoti">
            <FontAwesomeIcon icon={faCommentDots} />
            {content.comments_count}
          </div>
          {commentLen == 0 ? <NoneReply /> : null}
          {comment.map((a, i) => {
            return (
              <Reply
                i={i}
                comment={comment}
                setModal={setModal}
                setUsername={setUsername}
                setComment={setComment}
                key={a.id}
              />
            );
          })}
        </div>
      </div>
      {modal === true ? (
        <Profile username={username} setModal={setModal} />
      ) : null}
    </>
  );
}

function Reply({ comment, i, setModal, setUsername, setComment }) {
  function saveName() {
    function getProfile() {
      ajax.open(
        "GET",
        PROFILE_URL.replace("@username", comment[i].user),
        false
      );
      ajax.send();
      return JSON.parse(ajax.response);
    }
    setUsername(getProfile());
    setModal(true);
  }

  if (comment[i].length > 0) {
    return (
      <>
        <div className="commentWrap">
          <div className="user">
            <span onClick={saveName}>
              <FontAwesomeIcon icon={faUser} />
              {comment[i].user}
            </span>
            <span>
              <FontAwesomeIcon icon={faClock} />
              {comment[i].time_ago}
            </span>
          </div>
          <div
            className="comment"
            dangerouslySetInnerHTML={{
              __html: `${comment[i].content}`,
            }}
          ></div>
        </div>
        {comment[i].comments.map((a, i) => {
          function saveName() {
            function getProfile() {
              ajax.open("GET", PROFILE_URL.replace("@username", a.user), false);
              ajax.send();
              return JSON.parse(ajax.response);
            }
            setUsername(getProfile());
            setModal(true);
          }
          return (
            <div className={`commentWrap mgL${(i + 1) * 40} Re`} key={i}>
              <i className="replyMark">
                <FontAwesomeIcon icon={faShare} />
              </i>
              <div className="user">
                <span onClick={saveName}>
                  <FontAwesomeIcon icon={faUser} />
                  {a.user}
                </span>
                <span>
                  <FontAwesomeIcon icon={faClock} />
                  {a.time_ago}
                </span>
              </div>
              <div
                className="comment"
                dangerouslySetInnerHTML={{
                  __html: `${a.content}`,
                }}
              ></div>
            </div>
          );
        })}
      </>
    );
  } else {
    return (
      <>
        <div className="commentWrap">
          <div className="user">
            <span onClick={saveName}>
              <FontAwesomeIcon icon={faUser} />
              {comment[i].user}
            </span>
            <span>
              <FontAwesomeIcon icon={faClock} />
              {comment[i].time_ago}
            </span>
          </div>
          <div
            className="comment"
            dangerouslySetInnerHTML={{
              __html: `${comment[i].content}`,
            }}
          ></div>
        </div>
        {comment[i].comments.map((a, i) => {
          function saveName() {
            function getProfile() {
              ajax.open("GET", PROFILE_URL.replace("@username", a.user), false);
              ajax.send();
              return JSON.parse(ajax.response);
            }
            setUsername(getProfile());
            setModal(true);
          }
          return (
            <div className={`commentWrap mgL${(i + 1) * 40} Re`} key={i}>
              <i className="replyMark">
                <FontAwesomeIcon icon={faShare} />
              </i>
              <div className="user">
                <span onClick={saveName}>
                  <FontAwesomeIcon icon={faUser} />
                  {a.user}
                </span>
                <span>
                  <FontAwesomeIcon icon={faClock} />
                  {a.time_ago}
                </span>
              </div>
              <div
                className="comment"
                dangerouslySetInnerHTML={{
                  __html: `${a.content}`,
                }}
              ></div>
            </div>
          );
        })}
      </>
    );
  }
}

function NoneReply() {
  return <div className="noti">No comments.</div>;
}

export default Detail;
