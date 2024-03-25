import './App.css';
import { useState } from 'react';
import QuoteBox from './QuoteBox';
import api from "./api/Quote";

function App() {
  const [quote, setQuote] = useState([]);
  const fetchQuote = async() => {
    try{
      const response = await api.get(`/random?maxLength=${150}`);
      const data = response.data;
      console.log(data);
      setQuote([data.content, data.author]);
    }catch(error){
      if (error.response){//there is a response but not 200 range
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      }else console.log(`Error: ${error.message}`); //no response,..

    }
  }

  return (
    <div className="App"  >
      <main>
        <QuoteBox fetchQuote = {fetchQuote} className="QuoteBox" quote={quote} style={quote.length < 100? {height: 300} : {height: 400}}/>
      </main>  
    </div>
  );
}

export default App;
