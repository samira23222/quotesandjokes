import React, { useState, useEffect } from 'react';
import './App.css';
import './App.scss';

const App = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    getQuote()
  }, []);

  const getQuote = () => {
    let url = `https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json`;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        let dataQuotes = data.quotes;
        let randomNum = Math.floor(Math.random() * dataQuotes.length);
        let randomQuote = dataQuotes[randomNum];

        setQuote(randomQuote.quote);
        setAuthor(randomQuote.author);
      })
  }

  const handleClick = () => {
    getQuote();
  }

  return (
    <div className="container">
    <h1 className="title">Quotes Jokes Generator</h1>
    <div className="wrapper">
    <h2 className="value">{quote}</h2>
  
  
    
 </div>
 <button className="button" onClick={handleClick}
    >Load new Quote</button>
  </div>
  )
}

export default App;




























/*export default function App() {
  const [quotes, setQuotes] = useState([]);
  const [Number, setNumber] = useState(0); 

  useEffect(() => {
    fetch(
      `https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json`
    )
    .then((res) =>res.json())
    .then((data) => setQuotes(data))
  }, [Number]);

  return (
    <div className="container">
      <h1 className="title">Quotes Jokes Generator</h1>
      <div className="wrapper">
      <h2 className="value">{quotes.quote}</h2>
      <br />
      <button className="button" onClick={() => {
          setNumber(Math.random());
        }}
      >Load new Quote</button>
   </div>
    </div>
  )
}*/