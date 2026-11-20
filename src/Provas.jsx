import SearchBar from './component/SearchBar';
import './component/css/style.css';
import { dataSets } from './component/Database';
import SingleContentCardWrapper from './component/SingleContentCardWrapper';

function Provas() {
  return (
    <div>
      <SearchBar
        categoria="provas"
        page="provas"
        label="Que prova você quer ver?"
        className="Search-bar-page"
      />

      <SingleContentCardWrapper  
      items={dataSets.provas} 
      className="Single-content-card-wrapper" 
      type="Single-content-card-materia" 
      page="provas"
      />
    </div>
  )
}

export default Provas;