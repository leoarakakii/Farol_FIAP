import './component/css/style.css';
import SingleContentCardWrapper from './component/SingleContentCardWrapper';
import SearchBar from './component/SearchBar';
import { dataSets } from './component/Database';

function Estudar() {
  
    return (

        <div className="App">
            
        <header className="App-header">

            <SearchBar 
            categoria="materias" 
            page="estudar"
            className="Search-bar-page" />
           
            <SingleContentCardWrapper  
            items={dataSets.materias} 
            className="Single-content-card-wrapper" 
            type="Single-content-card-materia" 
            page="estudar"
            />
        </header>
        </div>
    );
}

export default Estudar;