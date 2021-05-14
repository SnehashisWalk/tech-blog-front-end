import "./body.css";
import Post1 from "./Post1.js";

export default function Body() {
  return (
    <div className="bodyWrapper">
      <div className="bodyLeft">
        <div className="bodyLeftHeader">Blogs</div>
        <div className="bodyLeftContent">
          <ul>
            <li>Visualizations with Web Audio API</li>
          </ul>
        </div>
      </div>
      <div className="bodyRight">
        <Post1 />
      </div>
    </div>
  );
}
