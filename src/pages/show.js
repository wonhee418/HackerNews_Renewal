import { useSelector } from "react-redux";
import { Profile } from "../components/Profile.js";
import { useEffect, useState } from "react";
import Item from "../components/Item.js";
import Banner from "../components/Banner.js";

// const ajax = new XMLHttpRequest();
// const SHOW_URL = "https://api.hnpwa.com/v0/show/@page.json";

function ShowPage() {
  let getData = useSelector((state) => state.show);
  let [username, setUsername] = useState("");
  let [modal, setModal] = useState(false);
  let pathname = window.location.pathname;
  let itemLen = getData.length;

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
