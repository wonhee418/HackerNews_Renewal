import { useSelector } from "react-redux";
import { Profile } from "../components/Profile.js";
import { useState } from "react";
import Item from "../components/Item.js";
import Banner from "../components/Banner.js";

function ShowPage() {
  const getData = useSelector((state) => state.job);
  const [itemList, setItemList] = useState(10);
  const [username, setUsername] = useState("");
  const [modal, setModal] = useState(false);
  const pathname = window.location.pathname;
  const itemLen = itemList;

  return (
    <>
      <Banner></Banner>
      <div className="inner">
        <h2>Jobs</h2>
        <div className="itemWrap">
          {getData.slice(0, itemList).map((a, i) => {
            return (
              <Item
                getData={a}
                num={i}
                key={a.id}
                setUsername={setUsername}
                setModal={setModal}
                path={pathname}
                itemLen={itemLen}
                setItemList={setItemList}
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
