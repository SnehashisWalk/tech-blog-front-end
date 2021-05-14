import "./footer.css";
import { FaHeart } from "react-icons/fa";
export default function Footer() {
  return (
    <div className="footerWrapper">
      <h4 className="footerTitle">
        Made with <FaHeart style={{ color: "white" }} /> in India.
      </h4>
    </div>
  );
}
