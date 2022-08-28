import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowDown } from "@fortawesome/free-solid-svg-icons";

function Arrow() {
  return (
    <div className="arrow">
      <FontAwesomeIcon icon={faCircleArrowDown} size="2x" />
    </div>
  );
}

export default Arrow;
