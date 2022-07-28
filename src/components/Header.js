import logoImg from "./../img/logo.png";
import "./../style/Header.scss";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-regular-svg-icons";
import { useEffect } from "react";

function Header({ mode, setMode }) {
  let navigate = useNavigate();
  const body = document.querySelector("body");
  const darkMode = localStorage.getItem("mode");

  // 테마 변경클릭시
  function chanMode() {
    const darkMode = localStorage.getItem("mode");

    if (darkMode === null) {
      localStorage.setItem("mode", "dark");
      body.classList.add("Dark");
    } else {
      localStorage.removeItem("mode", "dark");
      body.classList.remove("Dark");
    }
  }
  //렌더링시 상태 체크하여 테마설정
  darkMode === "dark"
    ? body.classList.add("Dark")
    : body.classList.remove("Dark");

  return (
    <div className="header">
      <div className="inner">
        <div
          className="logoWrap"
          onClick={() => {
            navigate("/");
          }}
        >
          <img src={logoImg} alt="logo"></img>
        </div>
        <div className="gnbWrap">
          <div className="cate clearfix">
            <ul>
              <li
                onClick={() => {
                  navigate("/new");
                }}
              >
                New
              </li>
              <li
                onClick={() => {
                  navigate("/ask");
                }}
              >
                Ask
              </li>
              <li
                onClick={() => {
                  navigate("/show");
                }}
              >
                Show
              </li>
              <li
                onClick={() => {
                  navigate("/job");
                }}
              >
                Jobs
              </li>
            </ul>
          </div>
        </div>
        <div
          className="thema"
          onClick={() => {
            setMode(!mode);
            chanMode();
          }}
        >
          {darkMode === null ? (
            <FontAwesomeIcon icon={faMoon} />
          ) : (
            <FontAwesomeIcon icon={faSun} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
