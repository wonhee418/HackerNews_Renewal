import { useSelector } from "react-redux";
import { useState } from "react";
import { Profile } from "../components/Profile.js";
import Item from "../components/Item.js";
import Banner from "../components/Banner.js";

function NewsPage() {
  let getData = useSelector((state) => state.newest);
  let [username, setUsername] = useState("");
  let [modal, setModal] = useState(false);
  let pathname = window.location.pathname;

  return (
    <>
      <Banner></Banner>
      <div className="inner">
        <h2>News Feed</h2>
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
      {modal === true ? (
        <Profile username={username} setModal={setModal} />
      ) : null}
    </>
  );
}

export default NewsPage;
