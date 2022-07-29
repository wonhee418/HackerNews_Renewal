import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";

export default function Error() {
  return (
    <div className="error">
      <h2>
        <FontAwesomeIcon icon={faCircleExclamation} />
        404 Page
      </h2>
      <p></p>
    </div>
  );
}
