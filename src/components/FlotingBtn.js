import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

function FlotingBtn() {
  function scrollTop() {
    window.scrollTo(0, 0);
  }
  return (
    <div className="FlotingBtn" onClick={scrollTop}>
      <FontAwesomeIcon icon={faArrowUp} />
    </div>
  );
}

export default FlotingBtn;
