import "./Style.css";
import React from "react";
import axios from "axios";
import QuoteAndAuthor from "./QuoteAndAuthor";

class App extends React.Component {
  state = { quotes: [] };

  componentDidMount() {
    this.handleClick();
  }

  handleClick = async () => {
    const response = await axios.get(
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
    );

    this.setState({
      quotes: response.data.quotes
    });
  };

  render() {
    return (
      <div className="container">
        <QuoteAndAuthor quotes={this.state.quotes} />
        <button
          onClick={this.handleClick}
          className="ui basic grey button"
          type="button"
        >
          New Quote
        </button>
      </div>
    );
  }
}

export default App;
