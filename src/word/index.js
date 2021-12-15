import React, {
  useEffect, useState
} from 'react'
import axios from 'axios';
import { map, size } from 'lodash';

function Word () {
  const [animals, setAnimals] = useState([]);
  const secretWord = ""
    useEffect(() => {
      const fetchAnimals = async () => {
        const result = await axios(
          'https://animalfinderapi.herokuapp.com/word',
        );
        setAnimals(result.data);
      }
      fetchAnimals();
    }, [])

  {map(animals, (animal) => (
    animal.word,
    console.log(size(animal.word))
  ))}


  return (
    <React.Fragment>
      {map(animals, (animal) => (
        <p>{animal.word}
        {console.log(size(animal.word))}</p>
      ))}
    </React.Fragment>
  )
}
export default Word;
