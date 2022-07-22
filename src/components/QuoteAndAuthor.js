import "./Style.css";
import React from "react";

const QuoteAndAuthor = (props) => {
  let random = Math.floor(Math.random() * props.quotes.length);
  const quotes = props.quotes.map((quote) => {
    return (
      <div className="contents">
        <i class="quote left icon" style={{color: "#c1e1ca"}}></i>
        <p className="quote">{quote.quote}</p>
        <p className="author">{`-${quote.author}`}</p>
      </div>
    );
  });
  return <div>{quotes[random]}</div>;
};

export default QuoteAndAuthor;
