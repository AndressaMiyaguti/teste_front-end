import "./Card.css";
import comida1 from "./../../imagens/comida_1.svg";
import comida2 from "./../../imagens/comida_2.svg";
import comida3 from "./../../imagens/comida_3.svg";
import comida4 from "./../../imagens/comida_4.svg";

export default function Card() {
  return (
    <div className="card">
      <div className="card_area">
        <div className="card_area_img">
          <img src={comida1} alt="comida"></img>
        </div>
        <div className="card_area_description">
          <h3>Broccoli Salad With Bacon</h3>
          <div className="card_area_description_button">
            <button>See Recipe</button>
          </div>
        </div>
      </div>
      <div className="card_area">
        <div className="card_area_img">
          <img src={comida2} alt="comida"></img>
        </div>
        <div className="card_area_description">
          <h3>Classic Beef Burgers</h3>
          <div className="card_area_description_button">
            <button>See Recipe</button>
          </div>
        </div>
      </div>
      <div className="card_area">
        <div className="card_area_img">
          <img src={comida3} alt="comida"></img>
        </div>
        <div className="card_area_description">
          <h3>Classic Potato Salad</h3>
          <div className="card_area_description_button">
            <button>See Recipe</button>
          </div>
        </div>
      </div>
      <div className="card_area">
        <div className="card_area_img">
          <img src={comida4} alt="comida"></img>
        </div>
        <div className="card_area_description">
          <h3>Cherry Cobbler on the Grill</h3>
          <div className="card_area_description_button">
            <button>See Recipe</button>
          </div>
        </div>
      </div>
    </div>
  );
}
