import {FaQuoteLeft} from 'react-icons/fa';
import NewQuote from './NewQuote';

const QuoteBox = ( {quote, fetchQuote}) => {
    return (
        <div className="content">
            <span><FaQuoteLeft className='quoteLeft' />
            <h1 id='text'>{quote[0]}</h1></span>
            <h2 id='author'>{quote[1]}</h2>
            <NewQuote fetchQuote = {fetchQuote} quote={quote} />
        </div>
    )
}
export default QuoteBox;