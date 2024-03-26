import {FaQuoteLeft} from 'react-icons/fa';
import NewQuote from './NewQuote';

const QuoteBox = ( {isVisible,quote, fetchQuote}) => {
    return (
        <div className="content">
            <div className={`quote-container ${isVisible ? 'visible': 'hidden'}`}>
                <span ><FaQuoteLeft className='quoteLeft' />
                <h1 id='text' >{quote.text}</h1></span>
                <h2 id='author'>{quote.author}</h2>
            </div>
            <NewQuote fetchQuote = {fetchQuote} />
        </div>
    )
}
export default QuoteBox;