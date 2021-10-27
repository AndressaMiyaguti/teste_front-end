import './Search.css';

export default function Search(){
  return(
    <div className="container_search">
      <div className="bloco_search">
        <div className="bloco_search_subtitle">
          <h2>Ready for Trying a new recipe?</h2>
        </div>
        </div>
        <div className="bloco_search_input">
        <input type="text" placeholder="Search healthy recipes"/>
        <p className="search_icon"><i class="im im-magnifier"></i></p>
        </div>
        
      </div>
      

  );
}