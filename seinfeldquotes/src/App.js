import React from 'react';
import { connect } from "react-redux";

import QuoteSection from "./Components/quoteSection.js";
import { getQuote } from "./Actions";

function App(props) {
  
  return (
    <div className="App">
      <QuoteSection randomquote = {props.randomquote} isLoading={props.isLoading} getQuote = {props.getQuote}/>
      
    </div>
  );
}

const mapStateToProps = state => {
  return {
    randomquote: state.randomquote,
    isLoading: state.isLoading,
  }
}

export default connect(mapStateToProps, {getQuote})(App);
