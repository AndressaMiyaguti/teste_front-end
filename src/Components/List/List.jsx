import "./List.css";
import Card from "./../Card/Card";

export default function List() {
  return (
    <div className="list">
      <div className="list_blocoI">
        <div className="list_subtitule">
          <h2>Our Best Recipes</h2>
        </div>
        <p>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.
        </p>
      </div>
      <Card />
    </div>
  );
}
