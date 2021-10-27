import "./Info.css";
import Search from "./../Search/Search";

import Navbar from "./../Navbar/Navbar";
export default function Info() {
  return (
    <div className="info">
      <div className="bloco_info_I">
        <div className="info_navbar">
          <Navbar />
        </div>
        <div className="info_search">
          <Search />
        </div>
      </div>
    </div>
  );
}
