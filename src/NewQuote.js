const NewQuote = ({fetchQuote}) => {
    return (
        <button onClick={fetchQuote} type="submit" id="new-quote">
            New quote
        </button>
        
    )
}
export default NewQuote;