import './App.css';
import { useState, useEffect } from 'react';
import QuoteBox from './QuoteBox';
import api from "./api/Quote";

function App() {
  const [quote, setQuote] = useState([]);
  useEffect(() => {
    const fetchQuote = async() => {
      try{
        const response = await api.get(`/random?maxLength=${150}`);
        const data = response.data;
        setQuote([data.content, data.author]);
      }catch(error){
        if (error.response){//there is a response but not 200 range
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        }else console.log(`Error: ${error.message}`); //no response,..

      }
    }
    fetchQuote();
  }, [])

  return (
    <div className="App">
      <main>
        <QuoteBox className="QuoteBox" quote={quote} />
      </main>  
    </div>
  );
}

export default App;
