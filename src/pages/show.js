import { useSelector } from "react-redux";
import { Profile } from "../components/Profile.js";
import { useEffect, useState } from "react";
import Item from "../components/Item.js";
import Banner from "../components/Banner.js";

// const ajax = new XMLHttpRequest();
// const SHOW_URL = "https://api.hnpwa.com/v0/show/@page.json";

function ShowPage() {
  let getData = useSelector((state) => state.show);
  // let [getShowData, setGetShowData] = useState(showData(1));
  let [username, setUsername] = useState("");
  let [modal, setModal] = useState(false);
  let pathname = window.location.pathname;
  let itemLen = getData.length;
  // let [scroll, setScroll] = useState(1);

  // function showData(key) {
  //   ajax.open("GET", SHOW_URL.replace("@page", key), false);
  //   ajax.send();
  //   return JSON.parse(ajax.response);
  // }

  // useEffect(() => {
  //   setGetShowData(showData(scroll));
  // }, [scroll]);

  return (
    <>
      <Banner></Banner>
      <div className="inner">
        <h2>Show</h2>
        <div className="itemWrap">
          {getData.map((a, i) => {
            return (
              <Item
                getData={a}
                itemLen={itemLen}
                num={i}
                key={a.id}
                setUsername={setUsername}
                setModal={setModal}
                path={pathname}
                // setGetShowData={setGetShowData}
                // scroll={scroll}
                // setScroll={setScroll}
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

export default ShowPage;
