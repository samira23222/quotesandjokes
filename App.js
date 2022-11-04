import './App.scss';
import {useState, useEffect} from "react"

export default function App() {
  const [jokes, setJokes] = useState([]);
  const [Number, setNumber] = useState(0); 

  useEffect(() => {
    fetch(
      `https://api.chucknorris.io/jokes/random`
    )
    .then((res) =>res.json())
    .then((data) => setJokes(data))
  }, [Number]);

  return (
    <div className="container">
      <h1 className="title">Chuck Norris Jokes Generator</h1>
      <div className="wrapper">
      <h2 className="value">{jokes.value}</h2>
      <br />
      <button className="button" onClick={() => {
          setNumber(Math.random());
        }}
      >Load new joke</button>
   </div>
    </div>
  )
}