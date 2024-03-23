import {FaQuoteLeft} from 'react-icons/fa';

const QuoteBox = ( {quote}) => {
    return (
        <div className="quote-content">
            <FaQuoteLeft className='quoteLeft' />
            <h1>{quote[0]}</h1>
            <h2>{quote[1]}</h2>
        </div>
    )
}
export default QuoteBox;