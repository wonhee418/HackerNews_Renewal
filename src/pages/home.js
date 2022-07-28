import "./../style/home.scss";
import { useSelector } from "react-redux";
import { Profile } from "./../components/Profile.js";
import { useState } from "react";
import Item from "../components/Item.js";
import Banner from "./../components/Banner.js";

function Home() {
  let getData = useSelector((state) => state.news);
  let [username, setUsername] = useState("");
  let [modal, setModal] = useState(false);
  let pathname = window.location.pathname;

  return (
    <>
      <Banner></Banner>
      <div className="inner">
        <div className="news cardWrap">
          <h2>Home</h2>
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
