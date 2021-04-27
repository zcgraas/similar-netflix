import './styles/App.scss';
import Heading from './Components/Heading.js';
import Collections from './Collections.js'

console.log(process.env.REACT_APP_TMDB_API_KEY)

function App() {
  return (
    <div className="body-background">
      <Heading />
      
      <Collections />
    </div>

  );
}

export default App;
