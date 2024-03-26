import './App.css';
import { useState, useEffect } from 'react';
import QuoteBox from './QuoteBox';
import api from "./api/Quote";

function App() {
  const [quote, setQuote] = useState({text: '', author: ''});
  const [isVisible, setIsVisible] = useState(true);
  const fetchQuote = async() => {
    try{
      const response = await api.get(`/random?maxLength=${150}`);
      const data = response.data;
      const newQuote = {text: data.content, author: data.author };
      setIsVisible(false);
      //simulating an API call delay 
      setTimeout(() => {
      setQuote(newQuote);
      changeColor();
      setIsVisible(true);
    }, 500)
    }catch(error){
      if (error.response){//there is a response but not 200 range
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      }else console.log(`Error: ${error.message}`); //no response,..

    }

  }

  const changeColor = () => {
    const body = document.querySelector("body");
    const colors = ["#12562a",  "#9b2226", "#b5838d", "#7f5539", "#3f37c9", "#3a015c", "#e07a5f", "#3d405b"];
    const color = Math.floor(Math.random() * 8);
    body.style.backgroundColor = colors[color];
    body.style.color = colors[color];
    const button = document.getElementById("new-quote");
    button.style.backgroundColor = colors[color];
  }

  useEffect(() => {
    fetchQuote()
  },[]);

  return (
    <div className="App"  >
      <main>
        <QuoteBox fetchQuote = {fetchQuote} className="QuoteBox" quote={quote} isVisible = {isVisible} style={quote.length < 100? {height: 300} : {height: 400}}/>
      </main>  
    </div>
  );
}

export default App;
