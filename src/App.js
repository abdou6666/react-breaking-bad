import './App.css';
import Header from './components/ui/Header';
import CharacterGrid from './components/Characters/CharacterGrid';
import Search from './components/ui/Search';
import { useState, useEffect } from 'react';
function App() {

  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [query, setQuery] = useState('');
  const abortCont = new AbortController();
 
  useEffect( () => {
    fetch(`https://www.breakingbadapi.com/api/characters?name=${query}`,{signal:abortCont.signal})
      .then((response) => {
        if (!response.ok) {
          throw Error('Could not fetch data');
        }
        return response.json();
      }).then((data) => {
        setIsLoading(false);
        setData(data);

      }).catch((error) => {
        console.log(error.message);
      })
         return () => abortCont.abort();
    }, [query])
  
    function handleQuery(q) {
        setQuery(q);
      }
  return (
    <div className="App">
      <Header />
      <Search getQuery={handleQuery}/>

      <CharacterGrid items={data} isLoading={isLoading}/>
    </div>
  );
}

export default App;
