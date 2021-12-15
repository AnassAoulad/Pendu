import React, {
  useEffect, useState
} from 'react'
import axios from 'axios';
import { map } from 'lodash';
import '../word/index.css'

function Word () {
  const [animals, setAnimals] = useState([]);
    useEffect(() => {
      const fetchAnimals = async () => {
        const result = await axios(
          'https://animalfinderapi.herokuapp.com/word',
        );
        setAnimals(result.data);
      }
      fetchAnimals();
    }, [])

  return (
    <React.Fragment className="SecretWord">
      {map(animals, (animal) => (
        <h2>{animal.word}</h2>
      ))}
    </React.Fragment>
  )
}
export default Word;
