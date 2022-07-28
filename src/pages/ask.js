import { useSelector } from "react-redux";
import { Profile } from "./../components/Profile.js";
import { useState } from "react";
import Item from "../components/Item.js";
import Banner from "./../components/Banner.js";

function AskPage() {
  let getData = useSelector((state) => state.ask);
  let [username, setUsername] = useState("");
  let [modal, setModal] = useState(false);
  let pathname = window.location.pathname;

  return (
    <>
      <Banner></Banner>
      <div className="inner">
        <h2>AsK</h2>
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

export default AskPage;
