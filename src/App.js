import React, {
 useEffect, useState
} from 'react'
import Input from "./input";
import axios from 'axios';
/// import { API_URL } from '../settings';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://animalfinderapi.herokuapp.com/word'`,
      );
      setData(result.data);
    }
    fetchData();
  })

  return(
    <React.Fragment className="App">
      <h1>Pendu</h1>
      <ul>
        {data.map(animal => (
          <li key={animal.id}>
            {console.log(animal)}
            <p>{animal.word}</p>
          </li>

        ))}
      </ul>
      <Input/>
    </React.Fragment>
  )
}

export default App;
